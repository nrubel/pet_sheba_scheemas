import {Document, model, Model, Schema} from "mongoose";
import {AdminSchemaObj} from "./schema_objs/admin";
import {schemaOptObj, toJsonObj} from "./schema_objs/toJsonObj";
import {ClinicSchemaObj} from "./schema_objs/clinic";

// Tools
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const isEmailValid = (val: string): boolean => emailPattern.test(val);

export const adminRoles: string[] = [`root`, `admin`]

// Interfaces
export interface IAdmin extends Document {
  email: string;
  name: string;
  password: string;
  loginCount: number;
  role: `root` | `admin`;
}

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

// Schema
export const AdminSchema: Schema = new Schema(AdminSchemaObj, schemaOptObj);
AdminSchema.set('toJSON', toJsonObj);

export const ClinicSchema: Schema = new Schema(ClinicSchemaObj, schemaOptObj);
ClinicSchema.set('toJSON', toJsonObj);


// Models
export const Admin: Model<IAdmin> = model('Admin', AdminSchema);
export const Clinic: Model<IClinic> = model('Clinic', ClinicSchema);
