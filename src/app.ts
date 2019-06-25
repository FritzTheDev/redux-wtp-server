// Package Imports
import express from "express";
import passport from "passport";

// Environment Vars
const port = process.env.PORT;
// App Initialization
const app = express();

// Global Middleware Setup
app.use()

// Starts The Server Listening For Requests
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
