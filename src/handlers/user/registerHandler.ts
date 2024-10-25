import { User } from "../../db";
import bcrypt from "bcrypt";
import { UserInfo } from "../../utils/interface";
import jwt from "jsonwebtoken";
import config from "../../utils/config";

const registerHandler = async (
  email: string,
  password: string,
  name: string
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format.");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }

  if (!email || !password || !name) {
    throw new Error("Missing data.");
  }
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists.");
  }

  const SALT_ROUNDS: number = 10;
  const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
  password = hashedPass;

  const newUser = await User.create({
    email,
    password,
    name,
  });

  const userInfo: UserInfo = {
    email: newUser.dataValues.email,
    name: newUser.dataValues.name,
    isBan: newUser.dataValues.isBan,
    phone: newUser.dataValues.phone
  };

  const secretKey = config.secretKey;
  if (!secretKey) {
    throw new Error("JWT secret key is not defined.");
  }

  const token = jwt.sign(userInfo, secretKey, { expiresIn: "1h" });

  return { userInfo, token };
};

export default registerHandler;
