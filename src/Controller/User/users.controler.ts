import { Request, Response } from "express";
import {
  deleteUserService,
  listAllUsersService,
  updateUserService,
} from "../../Services";

const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService(req.body);
  return res.status(200).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.params.id);
  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).json();
};

export { listAllUsersController, updateUserController, deleteUserController };
