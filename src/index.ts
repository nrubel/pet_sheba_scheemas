import {model, Model} from "mongoose";
import {ClinicSchema, IClinic} from "./schemas/clinic";
import {AdminSchema, IAdmin} from "./schemas/admin";

export const Admin: Model<IAdmin> = model('Admin', AdminSchema);
export const Clinic: Model<IClinic> = model('Clinic', ClinicSchema);