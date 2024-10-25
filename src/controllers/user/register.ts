import { Request, Response } from "express";
import registerHandler from "../../handlers/user/registerHandler";

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name } = req.body;

    // Verificar que los valores requeridos estén definidos y no sean vacíos
    if (!email || !password || !name) {
      res.status(400).json({ error: "All fields (email, password, name) are required." });
      return 
    }

    const loweredEmail = email.toLowerCase();
    const user = await registerHandler(loweredEmail, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default register;
