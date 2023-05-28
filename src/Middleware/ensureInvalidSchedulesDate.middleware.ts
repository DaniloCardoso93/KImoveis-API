import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import UserToProperty from "../entities/schedules.users.properties.entities";
import { AppError } from "../Error/errors";

const ensureInvalidSchedulesDateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schedulesRepo = AppDataSource.getRepository(UserToProperty);

  const invalidSchedule = await schedulesRepo
    .createQueryBuilder("schedules_users_properties")
    .where("schedules_users_properties.date = :date", { date: req.body.date })
    .orWhere("schedules_users_properties.hour = :hour", { hour: req.body.hour })
    .getOne();

  if (invalidSchedule) {
    throw new AppError("This date has already been set", 409);
  }
  return next();
};

export default ensureInvalidSchedulesDateMiddleware;
