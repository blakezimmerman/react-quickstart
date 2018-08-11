// Define constants
export const env = process.env.NODE_ENV || "development";
export const port = process.env.PORT || 3000;
export const host = process.env.HOST || `http://localhost:${port}/`;
export const clientConfig = { host };

// Create app
import express from "express";
const app = express();

// Serve app
import { serveApp } from "./serveApp";
serveApp(app);

// Start listening
app.listen(
  port,
  () => console.log(`Listening on ${host}`), // tslint:disable-line
);
