const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header("user-authentication");
    // console.log("the token in middleware", token);
    if (!token) return res.status(403).send("Access denied.");

    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    // console.log("user decode", req.user);
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
