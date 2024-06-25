import { Router } from "express";
import multer from "multer";
import createPost from "./createPost.js";
import authenticate from "../../middelware/authenticate.js"
import getFollowingPost from "./getFollowingPost.js";
import addLike from "./addLike.js";
import editPost from "./editPost.js";
import deletePost from "./deletePost.js";
import unlike from "./unlike.js";
import { upload, withFolderName } from "../../middelware/upload.js";
import { S3_POST_PATH } from "../../utils/constant.js";

const router = Router();

router.post("/", withFolderName(S3_POST_PATH), upload.single("content"), authenticate, createPost);
router.get("/", authenticate, getFollowingPost);
router.post("/:id/like", authenticate, addLike);
router.post("/:id/unlike", authenticate, unlike);
router.put("/:id", authenticate, editPost);
router.delete("/:id", authenticate, deletePost);

export default router;