"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.route("/send-email").post(userController_1.createUser);
router.route("/:userID/verify-account").patch(userController_1.verifyAccount);
router.route("/:userID/delete-account").delete(userController_1.deleteAccount);
router.route("/view-accounts").get(userController_1.viewallAccount);
exports.default = router;
