"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const podA_1 = require("./config/podA");
const app = (0, express_1.default)();
const port = 2345;
(0, mainApp_1.mainApp)(app);
const Server = app.listen(port, () => {
    (0, podA_1.podA)();
});
process.on("uncaughtException", (error) => {
    console.log("Server is shutting down", error === null || error === void 0 ? void 0 : error.message);
    process.exit(1);
});
process.on("uncaughtException", (reason) => {
    console.log("Server is shutting down", reason === null || reason === void 0 ? void 0 : reason.message);
    Server.close(() => {
        process.exit(1);
    });
});
