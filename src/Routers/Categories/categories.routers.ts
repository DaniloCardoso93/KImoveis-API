import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listPropertiesToCategoryController,
} from "../../Controller";
import {
  ensureAdmMiddleware,
  ensureAuthMiddleware,
  validateSchemaMiddleware,
} from "../../Middleware";
import verifyCategoresExists from "../../Middleware/verifyCategoriesExists.middleware";
import { createCategoriesShape } from "../../Schemas";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  validateSchemaMiddleware(createCategoriesShape),
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  verifyCategoresExists,
  createCategoriesController
);
categoriesRouter.get("", listCategoriesController);

categoriesRouter.get("/:id/properties", listPropertiesToCategoryController);

export default categoriesRouter;
