import { User } from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../utils/config";
import { UserInfo } from "../../utils/interface";

const editUserHandler = async (
  email: string,
  password?: string,
  name?: string,
  phone?: number
) => {
  const updateData: { password?: string; name?: string; phone?: number } = {};

  if (password) {
    const SALT_ROUNDS: number = 10;
    updateData.password = await bcrypt.hash(password, SALT_ROUNDS);
  }
  if (name) updateData.name = name;
  if (phone) updateData.phone = phone;

  await User.update(updateData, { where: { email } });

  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("User not found.");
  }

  const userInfo: UserInfo = {
    email: user.dataValues.email,
    name: user.dataValues.name,
    phone: user.dataValues.phone,
    isBan: user.dataValues.isBan
  };

  const secretKey = config.secretKey;

  // Verificar si secretKey está definido
  if (!secretKey) {
    throw new Error("Secret key is not defined.");
  }

  const token = jwt.sign(userInfo, secretKey, { expiresIn: "36h" });

  return token;
};

export default editUserHandler;
