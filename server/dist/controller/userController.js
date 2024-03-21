"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.verifyAccount = exports.viewallAccount = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const email_1 = require("../config/email");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const user = yield userModel_1.default.create({ name, email });
        (0, email_1.sendEmail)(user);
        return res.status(201).json({
            message: "Success....",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.createUser = createUser;
const viewallAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find().sort({
            createdAt: -1,
        });
        return res.status(200).json({
            message: `Viewing all ${users.length} accounts`,
            data: users
        });
    }
    catch (error) {
        return res.status(400).json({
            message: " Error occurred",
            data: error.message,
        });
    }
});
exports.viewallAccount = viewallAccount;
const verifyAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        if ((user === null || user === void 0 ? void 0 : user.verified) === false) {
            const realuser = yield userModel_1.default.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, {
                verified: true,
                new: true,
            });
            return res.status(201).json({
                message: "Successfully verified",
                data: realuser,
            });
        }
        else {
            return res.status(403).json({
                message: "Error occured",
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.verifyAccount = verifyAccount;
const deleteAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findByIdAndDelete(userID);
        return res.status(201).json({
            message: "Account deleted",
        });
    }
    catch (error) {
        return res.status(403).json({
            message: "Error occured while deleting account",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.deleteAccount = deleteAccount;
