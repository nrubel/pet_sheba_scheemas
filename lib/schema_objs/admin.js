"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchemaObj = void 0;
var index_1 = require("../index");
exports.AdminSchemaObj = {
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) { return (0, index_1.isEmailValid)(v); },
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
        enum: index_1.adminRoles,
    }
};
