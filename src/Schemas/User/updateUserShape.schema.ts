import * as yup from "yup";
import { IUserUpdate } from "../../interfaces/users";

const updateUserShape: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

export default updateUserShape;
