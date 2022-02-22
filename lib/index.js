"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = exports.Admin = void 0;
var mongoose_1 = require("mongoose");
var clinic_1 = require("./schemas/clinic");
var admin_1 = require("./schemas/admin");
exports.Admin = (0, mongoose_1.model)('Admin', admin_1.AdminSchema);
exports.Clinic = (0, mongoose_1.model)('Clinic', clinic_1.ClinicSchema);
