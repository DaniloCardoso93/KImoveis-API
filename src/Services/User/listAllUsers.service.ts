import { Request } from "express";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userArrayReturnedShape } from "../../Schemas";

const listAllUsersService = async (req: Request) => {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find();

  const res = await userArrayReturnedShape.validate(users, {
    stripUnknown: true,
  });

  return res;
};

export default listAllUsersService;
