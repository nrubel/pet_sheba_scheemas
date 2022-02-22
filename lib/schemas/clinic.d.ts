import { Document, Schema } from 'mongoose';
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
export declare const ClinicSchema: Schema;
