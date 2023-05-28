import { Router } from "express";
import {
  createUserController,
  listAllUsersController,
  updateUserController,
} from "../../Controller";
import { deleteUserController } from "../../Controller/User/users.controler";
import {
  ensureAdmOrLoggerUserMiddleware,
  ensureAuthMiddleware,
  ensureIsActiveMiddleware,
  ensureNotUpdateMiddleware,
  ensureParamsIdMiddleware,
  validateSchemaMiddleware,
  verifyEmailExists,
} from "../../Middleware";
import ensureAdmMiddleware from "../../Middleware/validatedAdm.middleware";
import { createUserShape, updateUserShape } from "../../Schemas";

const userRouter = Router();

userRouter.post(
  "",
  validateSchemaMiddleware(createUserShape),
  verifyEmailExists,
  createUserController
);
userRouter.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listAllUsersController
);
userRouter.patch(
  "/:id",
  validateSchemaMiddleware(updateUserShape),
  ensureAuthMiddleware,
  ensureParamsIdMiddleware,
  ensureNotUpdateMiddleware,
  ensureAdmOrLoggerUserMiddleware,
  updateUserController
);

userRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  ensureParamsIdMiddleware,
  ensureIsActiveMiddleware,
  deleteUserController
);

export default userRouter;
