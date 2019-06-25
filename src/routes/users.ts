import { Router } from "express";
import jwt from "jsonwebtoken";
import { addUser, comparePassword, getUserByEmail, User } from "../models/user";

const router = Router();

router.post("/register", (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
  });
  addUser(newUser, (err) => {
    if (err) {
      res.json({ success: false, msg: "Failed to Register User. Check your inputs" });
    } else {
      res.json({ success: true, msg: "User Registered" });
    }
  });
});

router.post("/authenticate", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  getUserByEmail(email, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.json({ success: false, msg: "User Not Found" });
    }

    comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        const token = jwt.sign({ data: user }, process.env.SECRET, {

        });
      }
    });

  });
});
