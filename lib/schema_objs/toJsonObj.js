"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaOptObj = exports.toJsonObj = void 0;
exports.toJsonObj = {
    versionKey: false,
    virtuals: true,
    transform: function (doc, ret) {
        delete ret._id;
    },
};
exports.schemaOptObj = {
    id: true,
    timestamps: true,
};
