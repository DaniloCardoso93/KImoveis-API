import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import Category from "../entities/categories.entities";
import { AppError } from "../Error/errors";

const ensureCategoryIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepo = AppDataSource.getRepository(Category);

  const foundCategory = await categoryRepo.findOneBy({
    id: req.body.categoryId,
  });

  if (!foundCategory) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export default ensureCategoryIdExistMiddleware;
