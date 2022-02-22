import { Model } from "mongoose";
import { IClinic } from "./schemas/clinic";
import { IAdmin } from "./schemas/admin";
export declare const Admin: Model<IAdmin>;
export declare const Clinic: Model<IClinic>;
