import { Router } from "express";
import { addUser, User } from "../models/user";

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
