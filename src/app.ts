// Package Imports
import express from "express";

// Environment Vars
const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
