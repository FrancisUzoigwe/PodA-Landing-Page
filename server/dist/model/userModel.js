"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    verified: { type: Boolean, default: false },
    name: { type: String },
    email: { type: String, toLowerCase: true, trim: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("user", userModel);
