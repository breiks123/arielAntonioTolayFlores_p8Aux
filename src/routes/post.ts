import { Router } from "express";
import {postControllers} from "../controllers/post";
const router = Router();
router.get("/",postControllers.index);
export default router; 