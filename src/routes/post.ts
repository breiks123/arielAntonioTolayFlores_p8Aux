import { Router } from "express";
import { postControllers } from "../controllers/post";
const router = Router();
router.get("/", postControllers.index);
router.post("/createPost", postControllers.createPost);
router.put("/editPost/:id", postControllers.editPost);
router.delete("/deletePost/:id", postControllers.deletePost);
export default router; 