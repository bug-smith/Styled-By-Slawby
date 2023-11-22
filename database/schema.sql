et client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "email" text,
  "password" text
);

CREATE TABLE "products" (
  "productId" serial PRIMARY KEY,
  "title" text,
  "desc" text,
  "info" text,
  "price" integer,
  "imageUrl" text
);

CREATE TABLE "carts" (
  "cartId" serial PRIMARY KEY,
  "userId" integer
);

CREATE TABLE "cartItems" (
  "cartItemId" serial PRIMARY KEY,
  "cartId" integer,
  "productId" integer,
  "quantity" integer
);

CREATE TABLE "orders" (
  "orderId" serial PRIMARY KEY,
  "userId" integer,
  "totalPrice" integer,
  "orderDate" timestamp,
  "status" text,
  "productId" integer
);

CREATE TABLE "orderItems" (
  "orderItemId" serial PRIMARY KEY,
  "orderId" integer,
  "productId" integer,
  "quantity" integer,
  "priceAtPurchase" integer
);

ALTER TABLE "carts" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "cartItems" ADD FOREIGN KEY ("cartId") REFERENCES "carts" ("cartId");

ALTER TABLE "cartItems" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "orders" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "orders" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "orderItems" ADD FOREIGN KEY ("orderId") REFERENCES "orders" ("orderId");
