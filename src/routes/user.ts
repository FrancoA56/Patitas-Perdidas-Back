import { Router } from "express";
import register from "../controllers/user/register";
import validateToken from "../controllers/user/validateToken";
import editUser from "../controllers/user/editUser";

const userRouter = Router();

userRouter.post("/", register);
userRouter.put("/:email", editUser);
userRouter.get("/token/", validateToken);


export default userRouter;