import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/properties.entities";
import { AppError } from "../Error/errors";

const ensurePropertyIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const PropertyRepo = AppDataSource.getRepository(Property);
  const findProperty = await PropertyRepo.findOneBy({ id: req.params.id });

  if (!findProperty) {
    throw new AppError("Property not found", 404);
  }
  return next();
};

export default ensurePropertyIdExistMiddleware;
