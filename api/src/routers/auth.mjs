import express from "express";
import { signup } from "../controllers/auth.js"; // This links to your controller logic

const router = express.Router();

router.post("/signup", signup);

export default router;