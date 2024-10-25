import { Router } from "express";
import animalsRouter from "./animals";
import userRouter from "./user";

const router = Router();

router.use("/animals", animalsRouter);
router.use("/user", userRouter);

export default router;

