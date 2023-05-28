import { Request, Response } from "express";
import {
  createCategoriesService,
  listCategoriesService,
  listPropertiesToCategoryService,
} from "../../Services";

const createCategoriesController = async (req: Request, res: Response) => {
  const categories = await createCategoriesService(req.body);
  return res.status(201).json(categories);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesService();
  return res.status(200).json(categories);
};

const listPropertiesToCategoryController = async (
  req: Request,
  res: Response
) => {
  const categories = await listPropertiesToCategoryService(req.params.id);
  return res.status(200).json(categories);
};

export {
  createCategoriesController,
  listCategoriesController,
  listPropertiesToCategoryController,
};
