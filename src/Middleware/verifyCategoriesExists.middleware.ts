import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import Category from "../entities/categories.entities";
import { AppError } from "../Error/errors";

const verifyCategoresExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(Category);

  const existCategories = await userRepo.findOneBy({ name: req.body.name });

  if (existCategories) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default verifyCategoresExists;
