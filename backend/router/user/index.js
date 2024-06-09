import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";
import multer from "multer";
import getUserPost from "./getUserPost.js";
import authenticate from "../../middelware/authenticate.js"
import getUsers from "./getUsers.js";
import follow from "./follow.js";
import unfollow from "./unfollow.js";
import getUserDetails from "./getUserDetails.js";
import editUser from "./editUser.js";
const upload = multer({ dest: 'uploads/profilePic' });

const router = Router();

router.post("/signUp", upload.single('profilePic'), signUp);
router.post("/login", login);
router.get("/:userId/post", authenticate, getUserPost);
router.get("/:id", authenticate, getUserDetails)
router.get("/", authenticate, getUsers);
router.post("/follow/:userId", authenticate, follow);
router.post("/unfollow/:userId", authenticate, unfollow);
router.put("/:id", authenticate, upload.single('profilePic'), editUser);

export default router;