import {Document, Model, model, Schema} from 'mongoose';
import {isEmailValid} from "../tools";

export interface IClinic extends Document {
  ownerName: string;
  ownerNIdNo: string;
  ownerNIdImage: string;
  clinicName: string;
  clinicTradeLicenseNo: string;
  clinicTradeLicenseImage: string;
  email: string;
  phone: string;
  password: string;
  location: string[];
  address: string;
  loginCount: number;
  logo: string;
}

export const ClinicSchema: Schema = new Schema({
  ownerName: {
    type: String,
    required: true,
    message: `Owner name is required`,
  },
  ownerNIdNo: {
    type: String,
    required: true,
    message: `Owner NID no is required`,
  },
  ownerNIdImage: {
    type: String,
    required: true,
    message: `Owner NID is required`,
  },
  clinicName: {
    type: String,
    required: true,
    message: `Clinic name is required`,
  },
  clinicTradeLicenseNo: {
    type: String,
    required: true,
    message: `Trade license no is required`,
  },
  clinicTradeLicenseImage: {
    type: String,
    required: true,
    message: `Trade license is required`,
  },
  email: {
    type: String,
    required: true,
    message: `An email is required`,
    unique: true,
    validate: {
      validator: (v: string) => isEmailValid(v),
      message: `Email provided is not valid`,
    },
  },
  phone: {
    type: String,
    required: true,
    message: `Phone number is required`,
    unique: true,
  },
  location: {
    type: [Number],
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  password: {type: String, required: true},
  loginCount: {type: Number, required: true, default: 0},
}, {
  id: true,
  timestamps: true,
});

ClinicSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id
  },
});
