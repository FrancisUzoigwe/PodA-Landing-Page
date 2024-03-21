import mongoose from "mongoose";

const url: string =
  "mongodb+srv://kossyuzoigwe:kossyuzoigwe@francisuzoigwe.3irljsp.mongodb.net/PodA";

export const podA = () => {
  mongoose.connect(url).then(() => {
    console.log("podA connection established");
  });
};
