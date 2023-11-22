/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';
import { promises as fs } from 'fs';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/images', async (req, res) => {
  try {
    const imagesDir = `${uploadsStaticDir}/images`;
    const files = await fs.readdir(imagesDir);
    const images = files.map((file) => `images/${file}`);
    res.json(images);
  } catch (e) {
    console.error(e);
    res.status(500).send('cant retrieve');
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const sql = `select * from "products"`;
    const results = await db.query(sql);
    res.json(results.rows);
  } catch (e) {
    console.error(e);
    res.status(500).send('cant retrieve');
  }
});

app.get('/api/products/:productId', async (req, res) => {
  try {
    const productId = Number(req.params.productId);
    const sql = 'select * from "products" where "productId" = $1';
    const params = [productId];
    const result = await db.query(sql, params);
    const product = result.rows[0];
    res.json(product);
  } catch (e) {
    console.error(e);
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
