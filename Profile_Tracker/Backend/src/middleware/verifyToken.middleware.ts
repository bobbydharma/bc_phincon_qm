import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../util/jwt.js";

export const protectRoute = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const base64Token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(base64Token);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
