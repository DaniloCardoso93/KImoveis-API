import AppDataSource from "../../data-source";
import Address from "../../entities/addresses.entities";
import Category from "../../entities/categories.entities";
import Property from "../../entities/properties.entities";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesService = async (req: IPropertyRequest) => {
  const propertiesRepo = AppDataSource.getRepository(Property);
  const addressRepo = AppDataSource.getRepository(Address);
  const categoryRepo = AppDataSource.getRepository(Category);

  const category = await categoryRepo.findOneBy({ id: req.categoryId });

  const addressData = addressRepo.create(req.address);
  await addressRepo.save(addressData);

  const properties = propertiesRepo.create(req);
  const propertyData = await propertiesRepo.save({
    ...properties,
    address: addressData,
    category: category,
  });

  return propertyData;
};

export default createPropertiesService;
