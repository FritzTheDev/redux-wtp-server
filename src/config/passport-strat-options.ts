// Package Imports
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { getUserById } from "../models/user";

// StrategyOptions object to add options to
export const passportSetup = (passport) => {
  const opts: StrategyOptions = {
  // defines where/how to extract the JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // defines whether the strat should use a key or a secret
  secretOrKey: "secret",
  };
  // set up the strategy to protect "User" endpoints from non-authed users
  passport.use(new Strategy(opts, (jwtPayload, done) => {
    getUserById(jwtPayload.data._id, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
};
