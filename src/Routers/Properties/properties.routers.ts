import { Router } from "express";
import {
  createPropertiesController,
  listPropertiesController,
} from "../../Controller";
import {
  ensureAdmMiddleware,
  ensureAuthMiddleware,
  ensureCategoryIdExistMiddleware,
  validateSchemaMiddleware,
  verifyPropertiesExist,
} from "../../Middleware";
import { createPropertiesShape } from "../../Schemas";

const propertiesRouter = Router();

propertiesRouter.post(
  "",
  validateSchemaMiddleware(createPropertiesShape),
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensureCategoryIdExistMiddleware,
  verifyPropertiesExist,
  createPropertiesController
);
propertiesRouter.get("", listPropertiesController);

export default propertiesRouter;
