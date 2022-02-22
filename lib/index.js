"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = exports.Admin = exports.ClinicSchema = exports.AdminSchema = exports.adminRoles = exports.isEmailValid = void 0;
var mongoose_1 = require("mongoose");
// Tools
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var isEmailValid = function (val) { return emailPattern.test(val); };
exports.isEmailValid = isEmailValid;
exports.adminRoles = ["root", "admin"];
// Schema
exports.AdminSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) { return (0, exports.isEmailValid)(v); },
            message: "Email provided is not valid",
        }
    },
    name: {
        type: String,
        required: true,
        minLength: [2, "Name should be at least 2 character long"],
    },
    password: { type: String, required: true },
    loginCount: { type: Number, required: true, default: 0 },
    role: {
        type: String,
        required: true,
        default: "admin",
        enum: exports.adminRoles,
    }
}, {
    id: true,
    timestamps: true,
});
exports.AdminSchema.set('toJSON', {
    versionKey: false,
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.ClinicSchema = new mongoose_1.Schema({
    ownerName: {
        type: String,
        required: true,
        message: "Owner name is required",
    },
    ownerNIdNo: {
        type: String,
        required: true,
        message: "Owner NID no is required",
    },
    ownerNIdImage: {
        type: String,
        required: true,
        message: "Owner NID is required",
    },
    clinicName: {
        type: String,
        required: true,
        message: "Clinic name is required",
    },
    clinicTradeLicenseNo: {
        type: String,
        required: true,
        message: "Trade license no is required",
    },
    clinicTradeLicenseImage: {
        type: String,
        required: true,
        message: "Trade license is required",
    },
    email: {
        type: String,
        required: true,
        message: "An email is required",
        unique: true,
        validate: {
            validator: function (v) { return (0, exports.isEmailValid)(v); },
            message: "Email provided is not valid",
        },
    },
    phone: {
        type: String,
        required: true,
        message: "Phone number is required",
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
    password: { type: String, required: true },
    loginCount: { type: Number, required: true, default: 0 },
}, {
    id: true,
    timestamps: true,
});
exports.ClinicSchema.set('toJSON', {
    versionKey: false,
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
// Models
exports.Admin = (0, mongoose_1.model)('Admin', exports.AdminSchema);
exports.Clinic = (0, mongoose_1.model)('Clinic', exports.ClinicSchema);
