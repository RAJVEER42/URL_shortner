import { validateUserToken } from '../utils/token.js';

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers['authorization']; // auth header

  if (!authHeader) return next(); // if no auth header

  if (!authHeader.startsWith('Bearer'))
    return res
      .status(400)
      .json({ error: 'Authorization header must start with Bearer' });

  const [_, token] = authHeader.split(' '); // [Bearer, <TOKEN>]

  const payload = validateUserToken(token); // decoding the token.

  req.user = payload;
  next();
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function ensureAuthenticated(req, res, next) {
  if (!req.user || !req.user.id) {
    return res
      .status(401)
      .json({ error: 'You must be logged in to access this resource' });
  }
  next();
}; // checks user must exist.
