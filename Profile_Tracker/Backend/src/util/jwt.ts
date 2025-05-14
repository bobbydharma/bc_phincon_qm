import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "your-secret-key";

export const createAccessToken = (payload: JwtPayload, expiresIn = "20m") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);
};


export const createRefreshToken = (payload: JwtPayload, expiresIn = "7d") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

