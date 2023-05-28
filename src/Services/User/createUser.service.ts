import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IReturnedUser, IUserRequest } from "../../interfaces/users/index";
import { userReturnedShape } from "../../Schemas";

export const createUserService = async (
  req: IUserRequest
): Promise<IReturnedUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = userRepo.create(req);

  await userRepo.save(user);

  const userRes = await userReturnedShape.validate(user, {
    stripUnknown: true,
  });

  return userRes;
};
