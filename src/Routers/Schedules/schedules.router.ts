import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesController,
} from "../../Controller";
import {
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensurePropertyIdExistMiddleware,
  ensureDateValidMiddleware,
  ensureInvalidSchedulesDateMiddleware,
  ensurePropertyIdCreateSchedulesMiddleware,
} from "../../Middleware";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  ensureAuthMiddleware,
  ensurePropertyIdCreateSchedulesMiddleware,
  ensureDateValidMiddleware,
  ensureInvalidSchedulesDateMiddleware,
  createSchedulesController
);

schedulesRouter.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensurePropertyIdExistMiddleware,
  listSchedulesController
);

export default schedulesRouter;
