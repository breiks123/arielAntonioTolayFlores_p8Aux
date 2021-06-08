import { Router } from "express";
import { userControllers } from "../controllers/user";
const router = Router();
router.get("/", userControllers.index);
router.post("/createUser", userControllers.createUser);
router.put("/editUser/:id", userControllers.editUser);
router.delete("/deleteUser/:id", userControllers.deleteUser);
router.get("/getprofile/:id", userControllers.getProfile);
export default router;