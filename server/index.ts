import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { podA } from "./config/podA";

const app: Application = express();
const port: number = 2345;

mainApp(app);
const Server = app.listen(port, () => {
  podA();
});

process.on("uncaughtException", (error: any) => {
  console.log("Server is shutting down", error?.message);

  process.exit(1);
});

process.on("uncaughtException", (reason: any) => {
  console.log("Server is shutting down", reason?.message);

  Server.close(() => {
    process.exit(1);
  });
});
