import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import Property from "../entities/properties.entities";
import { AppError } from "../Error/errors";

const ensurePropertyIdCreateSchedulesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertyRepo = AppDataSource.getRepository(Property);

  const property = await propertyRepo.findOneBy({ id: req.body.propertyId });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  return next();
};

export default ensurePropertyIdCreateSchedulesMiddleware;
