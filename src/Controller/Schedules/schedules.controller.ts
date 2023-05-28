import { Request, Response } from "express";
import { createSchedulesService, listSchedulesService } from "../../Services";

const createSchedulesController = async (req: Request, res: Response) => {
  const schedules = await createSchedulesService(req.body, req.user.id);
  return res.status(201).json(schedules);
};

const listSchedulesController = async (req: Request, res: Response) => {
  const schedules = await listSchedulesService(req.params.id);
  return res.status(200).json(schedules);
};

export { createSchedulesController, listSchedulesController };
