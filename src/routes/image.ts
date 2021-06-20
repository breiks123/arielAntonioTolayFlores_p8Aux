import { Router } from "express";
import { imageControllers } from "../controllers/image";
const router = Router();
router.post("/newImage", imageControllers.newImage);
router.get("/:filename", imageControllers.getImage);
export default router;


