import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";
import multer from "multer";
import getUserPost from "./getUserPost.js";
import authenticate from "../../middelware/authenticate.js"
const upload = multer({ dest: 'uploads/profilePic' });

const router = Router();

router.post("/signUp", upload.single('profilePic'), signUp);
router.post("/login", login);
router.get("/:userId/post", authenticate, getUserPost)

export default router;