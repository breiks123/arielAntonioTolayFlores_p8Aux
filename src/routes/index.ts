import { Router } from "express";
import UserRoutes from "./user";
import PostRoutes from "./post";
import Saludo from "./routes";
const router = Router();
router.use("/user", UserRoutes);
router.use("/post", PostRoutes);
router.use("/", Saludo);
export default router;