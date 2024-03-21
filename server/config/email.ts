import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";
import jwt from "jsonwebtoken";

const googleID =
  "974320393524-qhafu2hsj694qi0v5f5ggvj3bj7gh6fr.apps.googleusercontent.com";

const googleSecret = "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";

const googleRefresh =
  "ya29.a0Ad52N3_cwIyVeM80dR-FWU2NjtmtXZO8lKyVuuWwzcE1NUafuqf21AZJQwQvliLV9_Nx8Z-J2EQdF-8fMatrxiEOIM_4nFV0wLexp_chJJalnqHbWpjbQZAQyZ81C4sMp8JQp7D7di-dywGC5VCWQwX2_1y7_GsgtHg0aCgYKAdkSARESFQHGX2MifUdGA1ZbkJbvF2dyIOm4fQ0171";

const googleURL = "https://developers.google.com/oauthplayground";

const Oauth = new google.auth.OAuth2(googleID, googleSecret, googleURL);
Oauth.setCredentials({ access_token: googleRefresh });

export const sendEmail = async (user: any) => {
  try {
    const getAccess: any = (await Oauth.getAccessToken()).token;

    const transport: any = nodemailer.createTransport({
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

    const token = jwt.sign({ id: user?.id, token: user?.token }, "code");
    const readFile: any = path.join(__dirname, "../views/Index.ejs");

    const data: any = await ejs.renderFile(readFile, {
      name: user?.name,
      email: user?.email,
      token: user?.token,
      url: `http://localhost:2345/api/${user?._id}/verify-account`,
    });

    const mailer: any = {
      from: "PodA <poda.information@gmail.com>",
      to: user?.email,
      subject: "Account Verification",
      html: data,
    };

    await transport.sendMail(mailer).then(() => {
      console.log("Sent!....");
    });
  } catch (error: any) {
    console.log(error?.stack);
  }
};
