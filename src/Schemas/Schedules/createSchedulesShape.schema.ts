import * as yup from "yup";

const createSchedulesShape = yup.object().shape({
  data: yup.date().required(),
  hour: yup.string().required(),
  propertiedId: yup.string().required(),
});

const returnedSchedulesShape = yup.object().shape({
  id: yup.string().required(),
  data: yup.date().required(),
  hour: yup.string().required(),
  propertiedId: yup.string().required(),
  userId: yup.string().required(),
});

export { createSchedulesShape, returnedSchedulesShape };
