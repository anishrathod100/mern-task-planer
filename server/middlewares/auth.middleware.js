import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const AuthUser = async (req, res, next) => {
  const { token } = req.headers;
  try {
    if (!token) {
      return res.json({ success: false, message: "Token not provided" });
    }

    const decodeJWT = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeJWT) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    const user = await User.findById(decodeJWT.id);
    req.user = user;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
