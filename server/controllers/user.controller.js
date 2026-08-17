import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/user.model";
const ganerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    const userExist = await User;
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const login = async (req, res) => {};
const authUser = async (req, res) => {};

export { register, login, authUser };
