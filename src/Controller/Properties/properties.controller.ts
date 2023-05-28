import { Request, Response } from "express";
import { createPropertiesService, listPropertiesService } from "../../Services";

const createPropertiesController = async (req: Request, res: Response) => {
  const properties = await createPropertiesService(req.body);
  return res.status(201).json(properties);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();
  return res.status(200).json(properties);
};

export { createPropertiesController, listPropertiesController };
