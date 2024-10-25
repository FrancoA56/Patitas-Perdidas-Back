import { Request, Response } from "express";
import getUserHandler from "../../handlers/user/getUserHandler";

interface adminQueries {
  id?: number;
  name?: string;
  isBan?:boolean;
}

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id, name, isBan }: adminQueries = req.query;

    const user = await getUserHandler({ id, name, isBan });
    const totalCount = user.length;
    res.setHeader("X-Total-Count", totalCount);


    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getUser;
