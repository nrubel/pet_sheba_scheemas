import { Document, Schema } from 'mongoose';
export declare const adminRoles: string[];
export interface IAdmin extends Document {
    email: string;
    name: string;
    password: string;
    loginCount: number;
    role: `root` | `admin`;
}
export declare const AdminSchema: Schema;
