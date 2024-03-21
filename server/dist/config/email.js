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
exports.sendEmail = void 0;
const googleapis_1 = require("googleapis");
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const googleID = "974320393524-qhafu2hsj694qi0v5f5ggvj3bj7gh6fr.apps.googleusercontent.com";
const googleSecret = "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";
const googleRefresh = "ya29.a0Ad52N3_cwIyVeM80dR-FWU2NjtmtXZO8lKyVuuWwzcE1NUafuqf21AZJQwQvliLV9_Nx8Z-J2EQdF-8fMatrxiEOIM_4nFV0wLexp_chJJalnqHbWpjbQZAQyZ81C4sMp8JQp7D7di-dywGC5VCWQwX2_1y7_GsgtHg0aCgYKAdkSARESFQHGX2MifUdGA1ZbkJbvF2dyIOm4fQ0171";
const googleURL = "https://developers.google.com/oauthplayground";
const Oauth = new googleapis_1.google.auth.OAuth2(googleID, googleSecret, googleURL);
Oauth.setCredentials({ access_token: googleRefresh });
const sendEmail = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAccess = (yield Oauth.getAccessToken()).token;
        const transport = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "poda.information@gmail.com",
                clientId: googleID,
                clientSecret: googleSecret,
                refreshToken: googleRefresh,
                accessToken: getAccess,
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user.id, token: user === null || user === void 0 ? void 0 : user.token }, "code");
        const readFile = path_1.default.join(__dirname, "../views/Index.ejs");
        const data = yield ejs_1.default.renderFile(readFile, {
            name: user === null || user === void 0 ? void 0 : user.name,
            email: user === null || user === void 0 ? void 0 : user.email,
            token: user === null || user === void 0 ? void 0 : user.token,
            url: `http://localhost:2345/api/${user === null || user === void 0 ? void 0 : user._id}/verify-account`,
        });
        const mailer = {
            from: "PodA <poda.information@gmail.com>",
            to: user === null || user === void 0 ? void 0 : user.email,
            subject: "Account Verification",
            html: data,
        };
        yield transport.sendMail(mailer).then(() => {
            console.log("Sent!....");
        });
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.stack);
    }
});
exports.sendEmail = sendEmail;
