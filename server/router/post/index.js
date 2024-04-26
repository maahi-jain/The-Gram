import { Router } from "express";
import multer from "multer";
import createPost from "./createPost.js";
import authenticate from "../../middelware/authenticate.js"
const upload = multer({ dest: 'uploads/post' })

const router = Router();

router.post("/", upload.single("content"), authenticate, createPost);

export default router;