import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res.status(401).json({ message: "Refresh token not found" });

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
    (req as any).user = payload;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired refresh token" });
  }
};
