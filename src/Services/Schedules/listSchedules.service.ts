import AppDataSource from "../../data-source";
import UserToProperty from "../../entities/schedules.users.properties.entities";

const listSchedulesService = async (req: string): Promise<object> => {
  const schedulesRepo = AppDataSource.getRepository(UserToProperty);

  const schedules = await schedulesRepo
    .createQueryBuilder("schedules_users_properties")
    .innerJoinAndSelect("schedules_users_properties.property", "properties")
    .innerJoinAndSelect("schedules_users_properties.user", "users")
    .where("properties.id = :id", { id: req })
    .select(["schedules_users_properties", "users"])
    .getMany();

  return { schedules: schedules };
};

export default listSchedulesService;
