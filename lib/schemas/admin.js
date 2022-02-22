"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = exports.adminRoles = void 0;
var mongoose_1 = require("mongoose");
var tools_1 = require("../tools");
exports.adminRoles = ["root", "admin"];
exports.AdminSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) { return (0, tools_1.isEmailValid)(v); },
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
