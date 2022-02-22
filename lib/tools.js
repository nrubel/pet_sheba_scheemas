"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailValid = void 0;
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var isEmailValid = function (val) { return emailPattern.test(val); };
exports.isEmailValid = isEmailValid;
