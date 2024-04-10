import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";
import multer from "multer";
const upload = multer({ dest: 'profilePics/' });

const router = Router();

router.post("/signUp", upload.single('profilePic'), signUp);
router.post("/login", login);

export default router;