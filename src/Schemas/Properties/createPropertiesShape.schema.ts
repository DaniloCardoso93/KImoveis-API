import * as yup from "yup";

const createPropertiesShape = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required().max(8),
    number: yup.string().notRequired(),
    city: yup.string().required(),
    state: yup.string().required().max(2),
  }),
  categoryId: yup.string().required(),
});

const PropertiesReturnedShape = yup.object().shape({
  id: yup.string().required(),
  value: yup.number().required(),
  size: yup.number().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().notRequired(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
  categoryId: yup.string().required(),
  sold: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export { createPropertiesShape, PropertiesReturnedShape };
