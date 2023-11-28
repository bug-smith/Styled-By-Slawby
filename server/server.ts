/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
import { promises as fs } from 'fs';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { nextTick } from 'process';

// type User = {
//   email: string;
//   password: string;
//   hashedPassword?: string | undefined;
//   userId?: number;
// };

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;

const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) {
  throw new Error('TOKEN_SECRET not found in .env');
}

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/images', async (req, res, next) => {
  try {
    const imagesDir = `${uploadsStaticDir}/images`;
    const files = await fs.readdir(imagesDir);
    const images = files.map((file) => `images/${file}`);
    res.json(images);
  } catch (e) {
    res.status(500).send('cant retrieve');
    next(e);
  }
});

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `select * from "products"`;
    const results = await db.query(sql);
    res.json(results.rows);
  } catch (e) {
    res.status(500).send('cant retrieve');
    next(e);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    const sql = 'select * from "products" where "productId" = $1';
    const params = [productId];
    const result = await db.query(sql, params);
    const product = result.rows[0];
    res.json(product);
  } catch (e) {
    next(e);
  }
});

app.post('/api/sign-up', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ClientError(400, 'please enter a password or username');
    }
    const checkEmailSql = `SELECT * FROM "users" WHERE "email" = $1`;
    const existingUser = await db.query(checkEmailSql, [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already in use' });
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `insert into "users" ("email", "hashedPassword")
                  values ($1, $2)
                  returning "userId", "email"`;
    const result = await db.query(sql, [email, hashedPassword]);
    res.status(201).json(result.rows[0]);
  } catch (e) {
    next(e);
  }
});

app.post('/api/sign-in', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new ClientError(401, 'invalid login');
    }
    if (!password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `select "userId", "hashedPassword"
                  from "users"
                  where "email" = $1`;
    const params = [email];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'invalid login');
    }
    const { userId, hashedPassword } = user;
    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'invalid login');
    }
    const payload = { userId, email };
    const token = jwt.sign(payload, hashKey);
    res.json({ token, user: payload });
  } catch (e) {
    next(e);
  }
});
/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
