import "express-async-errors";
import "reflect-metadata";
import express from "express";
import {
  categoriesRouter,
  loginRouter,
  propertiesRouter,
  schedulesRouter,
  userRouter,
} from "./Routers";
import { errorHandler } from "./Error/errors";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/properties", propertiesRouter);
app.use("/schedules", schedulesRouter);
app.use(errorHandler);

export default app;
