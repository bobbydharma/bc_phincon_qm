import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
  
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);

        if (typeof decoded === "object" && decoded !== null) {
          const encodedPayload = decoded.___;
          const userData = JSON.parse(Buffer.from(encodedPayload, "base64").toString("utf-8"));
        
          (req as any).params = userData.id;
        }
        
        next();
    } catch {
      res.status(401).json({ message: "Invalid token" });
    }
  };
  
