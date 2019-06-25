import { compare, genSalt, hash } from "bcryptjs";
import { model, Schema } from "mongoose";

// User Schema
const UserSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  fullName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User = model("User", UserSchema);

export const getUserById = (id, callback) => {
  User.findById(id, callback);
};

export const addUser = (newUser, callback) => {
  genSalt(10, (saltGenErr, salt) => {
    hash(newUser.password, salt, (hashErr, hashResult) => {
      if (hashErr || saltGenErr) {
        throw hashErr || saltGenErr;
      }
      newUser.password = hashResult;
      newUser.save(callback);
    });
  });
};

export const comparePassword = (candidatePassword, existingHash: string, callback) => {
  compare(candidatePassword, existingHash).then((isMatch) => {
    callback(null, isMatch);
  }).catch((err) => {
    throw err;
  });
};
