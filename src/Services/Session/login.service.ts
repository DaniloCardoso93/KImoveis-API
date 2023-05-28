import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../Error/errors";

export const loginUserService = async (req: IUserLogin): Promise<object> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneByOrFail({
    email: req.email,
  });

  if (!user.isActive) {
    throw new AppError("user is not active", 400);
  }

  if (!user) {
    throw new AppError("user or password invalid", 403);
  }

  const passMatch = await compare(req.password, user.password);
  if (!passMatch) {
    throw new AppError("user or password invalid", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return { token };
};
