import { Router } from "express";
import { loginUserController } from "../../Controller";
import { validateSchemaMiddleware } from "../../Middleware";
import { loginShape } from "../../Schemas";

const loginRouter = Router();

loginRouter.post("", validateSchemaMiddleware(loginShape), loginUserController);

export default loginRouter;
