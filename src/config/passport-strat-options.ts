// Package Imports
import { ExtractJwt, StrategyOptions } from "passport-jwt";

// StrategyOptions object to add options to
export const opts: StrategyOptions = {
  // defines where/how to extract the JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // defines whether the strat should use a key or a secret
  secretOrKey: "secret",
};