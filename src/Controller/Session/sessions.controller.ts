import { Request, Response } from "express";
import { createUserService, loginUserService } from "../../Services";

const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

const loginUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req.body);
  return res.status(200).json(token);
};

export { loginUserController, createUserController };
