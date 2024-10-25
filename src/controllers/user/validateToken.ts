import { Request, Response } from "express";
import validateTokenHandler from "../../handlers/user/validateTokenHandler";

const validateToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      res.status(400).json({ error: "Authorization header is missing." });
      return 
    }

    // Extract the token from the 'Bearer <token>' format.
    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(400).json({ error: "Token is missing." });
      return 
    }

    const access = await validateTokenHandler(token);

    res.status(200).json(access);
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
};

export default validateToken;
