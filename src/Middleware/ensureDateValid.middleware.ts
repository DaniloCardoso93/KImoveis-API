import { NextFunction, Request, Response } from "express";
import { AppError } from "../Error/errors";
import { IScheduleRequest } from "../interfaces/schedules";

const ensureDateValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hour, date }: IScheduleRequest = req.body;
  const day = new Date(date).getDay();
  if (day === 0 || day === 6) {
    throw new AppError("It's not a working day", 400);
  }

  const visitingTime = new Date(`${day} ${hour}`).getHours();
  if (visitingTime < 8 || visitingTime >= 18) {
    throw new AppError("It's not business hours", 400);
  }

  return next();
};

export default ensureDateValidMiddleware;
