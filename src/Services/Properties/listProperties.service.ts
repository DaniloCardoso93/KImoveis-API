import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entities";

const listPropertiesService = async () => {
  const propertyRepo = AppDataSource.getRepository(Property);

  const properties = await propertyRepo.find();

  return properties;
};

export default listPropertiesService;
