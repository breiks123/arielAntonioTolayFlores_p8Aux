import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    "Assignment 5,server running "
  );
});

export default router;
