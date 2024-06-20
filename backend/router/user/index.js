import { Router } from "express";
import authenticate from "../../middelware/authenticate.js";
import { upload, withFolderName } from "../../middelware/upload.js";
import editUser from "./editUser.js";
import follow from "./follow.js";
import getUserDetails from "./getUserDetails.js";
import getUserPost from "./getUserPost.js";
import getUsers from "./getUsers.js";
import login from "./login.js";
import signUp from "./signUp.js";
import unfollow from "./unfollow.js";
import { S3_PROFILE_PATH } from "../../utils/constant.js";

const router = Router();

router.post("/signUp", withFolderName(S3_PROFILE_PATH), upload.single('profilePic'), signUp);
router.post("/login", login);
router.get("/:userId/post", authenticate, getUserPost);
router.get("/:id", authenticate, getUserDetails)
router.get("/", authenticate, getUsers);
router.post("/follow/:userId", authenticate, follow);
router.post("/unfollow/:userId", authenticate, unfollow);
router.put("/:id", authenticate, withFolderName(S3_PROFILE_PATH), upload.single('profilePic'), editUser);

export default router;