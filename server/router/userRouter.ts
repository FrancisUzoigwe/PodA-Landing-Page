import express from "express";
import {
  createUser,
  deleteAccount,
  verifyAccount,
  viewallAccount,
} from "../controller/userController";

const router = express.Router();
router.route("/send-email").post(createUser);
router.route("/:userID/verify-account").patch(verifyAccount);
router.route("/:userID/delete-account").delete(deleteAccount);
router.route("/view-accounts").get(viewallAccount);
export default router;
