import { Request, Response } from "express";
import userModel from "../model/userModel";
import { sendEmail } from "../config/email";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.create({ name, email });
    sendEmail(user);
    return res.status(201).json({
      message: "Success....",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured",
      data: error?.message,
    });
  }
};

export const viewallAccount = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message :  `Viewing all ${users.length} accounts`,
      data: users
    })
  } catch (error: any) {
    return res.status(400).json({
      message: " Error occurred",
      data: error.message,
    });
  }
};

export const verifyAccount = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);
    if (user?.verified === false) {
      const realuser = await userModel.findByIdAndUpdate(user?._id, {
        verified: true,
        new: true,
      });

      return res.status(201).json({
        message: "Successfully verified",
        data: realuser,
      });
    } else {
      return res.status(403).json({
        message: "Error occured",
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured",
      data: error?.message,
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findByIdAndDelete(userID);
    return res.status(201).json({
      message: "Account deleted",
    });
  } catch (error: any) {
    return res.status(403).json({
      message: "Error occured while deleting account",
      data: error?.message,
    });
  }
};
