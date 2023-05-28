import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import Address from "../entities/addresses.entities";
import { AppError } from "../Error/errors";
const verifyPropertiesExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertiesRepo = AppDataSource.getRepository(Address);
  const existProperties = await propertiesRepo.findOneBy({
    zipCode: req.body.address.zipCode,
  });

  if (existProperties) {
    throw new AppError("Proprery already exists", 409);
  }
  return next();
};

export default verifyPropertiesExist;
