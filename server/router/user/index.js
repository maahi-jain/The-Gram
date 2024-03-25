import { Router } from "express";
import signUp from "./signUp.js";
import login from "./login.js";

const router = Router();

router.post("/signUp", signUp);
router.post("/login", login);

export default router;