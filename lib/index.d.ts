import { Document, Model, Schema } from "mongoose";
export declare const isEmailValid: (val: string) => boolean;
export declare const adminRoles: string[];
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
export declare const AdminSchema: Schema;
export declare const ClinicSchema: Schema;
export declare const Admin: Model<IAdmin>;
export declare const Clinic: Model<IClinic>;
