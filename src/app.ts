// Package Imports
import express from "express";

// Environment Vars
const port = process.env.PORT;
// App Initialization
const app = express();

// Starts The Server Listening For Requests
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
