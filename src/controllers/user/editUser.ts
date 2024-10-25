import { Request, Response } from "express";
import editUserHandler from "../../handlers/user/editUserHandler";

const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    const loweredEmail = email.toLowerCase();
    const { password, name, phone } = req.body;

    const token = await editUserHandler(
      loweredEmail,
      password,
      name,
      phone
    );

    res.status(200).json({message: "Usuario actualizado correctamente", token });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default editUser;
