import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const deleteUserService = async (userId: string): Promise<object> => {
  const userRepo = AppDataSource.getRepository(User);

  const foundUser = await userRepo.findOneBy({ id: userId });

  const isActiveFalse = {
    isActive: false,
  };

  const deleteUser = userRepo.create({
    ...foundUser,
    ...isActiveFalse,
  });

  await userRepo.save(deleteUser);
  return {};
};

export default deleteUserService;
