import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";

const listCategoriesService = async (): Promise<Category[]> => {
  const categoriesRepo = AppDataSource.getRepository(Category);
  const categories = await categoriesRepo.find();

  return categories;
};

export default listCategoriesService;
