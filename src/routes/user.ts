import { Router } from "express";
import {userControllers} from "../controllers/user";
const router = Router();
router.get("/",userControllers.index);
router.get("/createUser",userControllers.createUser);
export default router; 