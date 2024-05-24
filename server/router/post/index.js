import { Router } from "express";
import multer from "multer";
import createPost from "./createPost.js";
import authenticate from "../../middelware/authenticate.js"
import getFollowingPost from "./getFollowingPost.js";
const upload = multer({ dest: 'uploads/post' })

const router = Router();

router.post("/", upload.single("content"), authenticate, createPost);
router.get("/", authenticate, getFollowingPost);

export default router;