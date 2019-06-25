// Package Imports
import cors from "cors";
import express, { json } from "express";
import passport from "passport";

// Custom Module Imports
import { passportSetup } from "./config/passport-strat-options";
import { userRoutes } from "./routes/user";

// Environment Vars
const port = process.env.PORT || 8080;
// App Initialization
const app = express();

// Global Middleware Setup
// Cross Origin Resource Sharing
app.use(cors());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passportSetup(passport);

// Body-Parsing For JSON
app.use(json());

// Routes
// Main API Routes
app.use("/api/users", userRoutes);

// Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint. Try /api/");
});

// Starts The Server Listening For Requests
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
