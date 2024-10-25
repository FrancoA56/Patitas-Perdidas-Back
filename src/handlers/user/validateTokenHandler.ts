import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../utils/config";

function validateTokenHandler(token: string | undefined) {
  if (!token) throw new Error("There isn't a token.");
  if (!config.secretKey) throw new Error("Secret key is not defined.");

  try {
    const decodedToken = jwt.verify(token, config.secretKey) as JwtPayload;
    return decodedToken;
  } catch (error) {
    throw new Error("Invalid or expired token.");
  }
}

export default validateTokenHandler;
