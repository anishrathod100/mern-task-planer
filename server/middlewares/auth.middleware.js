import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const AuthUser = async (req, res, next) => {
  const { token } = req.headers;
  try {
    if (!token) {
      return res
        .status(404)
        .json({ success: false, message: "Token not provided" });
    }

    const decodeJWT = jwt.verify(token, process.env.JWT_KEY);
    if (!decodeJWT) {
      return res.status(404).json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findById(decodeJWT.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
