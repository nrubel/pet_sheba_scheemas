import {Document, Model, model, Schema} from 'mongoose';
import {isEmailValid} from "../tools";

export const adminRoles: string[] = [`root`, `admin`]

export interface IAdmin extends Document {
  email: string;
  name: string;
  password: string;
  loginCount: number;
  role: `root` | `admin`;
}

export const AdminSchema: Schema = new Schema({
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
}, {
  id: true,
  timestamps: true,
});

AdminSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id
  },
});