// Package Imports
import express from "express";

// Environment Vars
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
