import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entities";
import UserToProperty from "../../entities/schedules.users.properties.entities";
import User from "../../entities/user.entity";
import { AppError } from "../../Error/errors";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesService = async (
  schedules: IScheduleRequest,
  userId: string
): Promise<object> => {
  const schedulesRepo = AppDataSource.getRepository(UserToProperty);
  const userRepo = AppDataSource.getRepository(User);
  const propertyRepo = AppDataSource.getRepository(Property);

  const property = await propertyRepo.findOneBy({ id: schedules.propertyId });

  const user = await userRepo.findOneBy({ id: userId });

  const visit = schedulesRepo.create(schedules);

  await schedulesRepo.save({
    ...visit,
    property: property,
    user: user,
  });

  return { message: "Visit scheduled successfully" };
};

export default createSchedulesService;
