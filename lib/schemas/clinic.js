"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicSchema = void 0;
var mongoose_1 = require("mongoose");
var tools_1 = require("../tools");
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
            validator: function (v) { return (0, tools_1.isEmailValid)(v); },
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
