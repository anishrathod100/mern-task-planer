import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

const ganerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// register user
const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.json({ success: false, message: "All fields are required!" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User already exist!" });
    }

    const newUser = new User({
      fullname,
      email,
      password: await bcryptjs.hash(password, 10),
    });

    const user = newUser.save();
    const token = ganerateToken(user._id);
    res.json({
      success: true,
      token,
      message: "Register created successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

// login user
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "All fields are required!" });
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    return res.json({ success: false, message: "Invalid login details" });
  }

  const passMatch = await bcryptjs.compare(password, userExist.password);
  if (!passMatch) {
    return res.json({ success: false, message: "Invalid login details" });
  }

  res.json({
    success: true,
    userExist,
    token: ganerateToken(userExist._id),
    message: "Login successfully",
  });
};

// authentication user
const authUser = async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

export { register, login, authUser };
