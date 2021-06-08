import { Router, Request, Response } from "express";
const router = Router();
router.get("/", (req: Request, res: Response) => {
    res.send("Assigment 5,server Running");
});
export default router;