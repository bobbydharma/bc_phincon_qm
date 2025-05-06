import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const loginValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            password: Joi.required(),
            username: Joi.string().email().required(),
        });
        const validateError = schema.validate(req.body).error;
        if (validateError) {
            res.status(400).json({
                status: "error",
                message: validateError.message,
            });
            return;
        }
        next();
    } catch (error: any) {
        console.error(error);
    }
};

export const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.string().required(),
        });
        const validateError = schema.validate(req.body).error;
        if (validateError) {
            res.status(400).json({
                status: "error",
                message: validateError.message,
            });
            return;
        }
        next();
    } catch (error: any) {
        console.error(error);
    }
};