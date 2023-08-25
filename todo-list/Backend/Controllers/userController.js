const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");

// Controller 1 to login
const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await user.verifyPassword(password);
    // console.log("password verify in login", isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const generatedToken = jwt.sign(
      { userId: user._id },
      process.env.SECRETKEY
    );
    console.log("jwt token ", generatedToken);
    res
      .status(200)
      .json({ message: "Login successful", token: generatedToken });
  } catch (error) {
    res.status(500).send({ error: "Could not login" });
  }
};

// Controller 2 to Signup
const Signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new userModel({ userName, email, password });

    const result = user.save();
    if (result) res.status(200).json({ message: "Sign successful", result });
  } catch (error) {
    res.status(500).send({ error: "Could not Signup" });
  }
};

module.exports = {
  Login,
  Signup,
};
