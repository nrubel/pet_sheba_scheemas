"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = exports.Admin = exports.ClinicSchema = exports.AdminSchema = exports.adminRoles = exports.isEmailValid = void 0;
var mongoose_1 = require("mongoose");
var admin_1 = require("./schema_objs/admin");
var toJsonObj_1 = require("./schema_objs/toJsonObj");
var clinic_1 = require("./schema_objs/clinic");
// Tools
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var isEmailValid = function (val) { return emailPattern.test(val); };
exports.isEmailValid = isEmailValid;
exports.adminRoles = ["root", "admin"];
// Schema
exports.AdminSchema = new mongoose_1.Schema(admin_1.AdminSchemaObj, toJsonObj_1.schemaOptObj);
exports.AdminSchema.set('toJSON', toJsonObj_1.toJsonObj);
exports.ClinicSchema = new mongoose_1.Schema(clinic_1.ClinicSchemaObj, toJsonObj_1.schemaOptObj);
exports.ClinicSchema.set('toJSON', toJsonObj_1.toJsonObj);
// Models
exports.Admin = (0, mongoose_1.model)('Admin', exports.AdminSchema);
exports.Clinic = (0, mongoose_1.model)('Clinic', exports.ClinicSchema);
