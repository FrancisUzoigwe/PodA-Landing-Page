import { Application, Request, Response, json } from "express";
import cors from "cors";
import user from "./router/userRouter";
import morgan from "morgan";
export const mainApp = (app: Application) => {
  app.use(json());
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Sucess...",
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "Error occured",
        data: error?.message,
      });
    }
  });
  app.use("/api", user);
};
