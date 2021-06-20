import { Router } from "express";
import UserRoutes from "./user";
import PostRoutes from "./post";
import Saludo from "./routes";
import ImageRoutes from "./image"
const router = Router();
router.use("/user", UserRoutes);
router.use("/post", PostRoutes);
router.use("/", Saludo);
router.use("/image",ImageRoutes);
export default router;