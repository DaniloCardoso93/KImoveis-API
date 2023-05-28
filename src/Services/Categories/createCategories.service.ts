import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";
import {
  ICategoryRequest,
  ICategoryResponse,
} from "../../interfaces/categories";
import { categoriesReturnedShape } from "../../Schemas";

const createCategoriesService = async (
  req: ICategoryRequest
): Promise<ICategoryResponse> => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const category = categoryRepo.create(req);

  await categoryRepo.save(category);

  const categoryRes = await categoriesReturnedShape.validate(category, {
    stripUnknown: true,
  });
  return categoryRes;
};

export default createCategoriesService;
