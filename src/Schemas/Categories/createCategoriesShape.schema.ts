import * as yup from "yup";

const createCategoriesShape = yup.object().shape({
  name: yup.string().required(),
});

const categoriesReturnedShape = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
});

export { createCategoriesShape, categoriesReturnedShape };
