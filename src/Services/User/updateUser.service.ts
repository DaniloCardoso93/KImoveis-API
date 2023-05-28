import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IReturnedUser, IUserUpdate } from "../../interfaces/users";
import { userReturnedShape } from "../../Schemas";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IReturnedUser> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({ id: userId });

  const updatedUser = userRepo.create({
    ...findUser,
    ...userData,
  });
  await userRepo.save(updatedUser);

  const userWithoutPsw = await userReturnedShape.validate(updatedUser, {
    stripUnknown: true,
  });

  return userWithoutPsw;
};

export default updateUserService;
