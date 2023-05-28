import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";
import { AppError } from "../../Error/errors";

const listPropertiesToCategoryService = async (categoryId: string) => {
  const categoryRepo = AppDataSource.getRepository(Category);

  const propertiesToCategory = await categoryRepo.find({
    where: {
      id: categoryId,
    },
    relations: {
      properties: true,
    },
  });

  if (propertiesToCategory.length) {
    return propertiesToCategory[0];
  }

  throw new AppError("Invalid category", 404);
};

export default listPropertiesToCategoryService;
