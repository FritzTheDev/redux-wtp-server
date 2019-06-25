// Package Imports
import { ExtractJwt, StrategyOptions, Strategy } from "passport-jwt";

// StrategyOptions object to add options to
export const passportSetup = (passport) => {
  const opts: StrategyOptions = {
  // defines where/how to extract the JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // defines whether the strat should use a key or a secret
  secretOrKey: "secret",
  };
  passport.use(new Strategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data._id, (err, user) => {
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
