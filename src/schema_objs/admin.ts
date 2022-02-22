import {adminRoles, isEmailValid} from "../index";

export const AdminSchemaObj: any = {
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => isEmailValid(v),
      message: `Email provided is not valid`,
    }
  },
  name: {
    type: String,
    required: true,
    minLength: [2, `Name should be at least 2 character long`],
  },
  password: {type: String, required: true},
  loginCount: {type: Number, required: true, default: 0},
  role: {
    type: String,
    required: true,
    default: `admin`,
    enum: adminRoles,
  }
}