import { Document, model, Schema, Types } from "mongoose";

interface iUser {
  image: string;
  imageID: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  verified: boolean;
  password: string;
  address: string;
  bio: string;
  post?: {}[];
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    verified: { type: Boolean, default: false },
    name: { type: String },
    email: { type: String, toLowerCase: true, trim: true },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
