const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthController {
  login(req, res) {
    const { username, password } = req.body;

    if (username === "admin" && password === "12345") {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        success: true,
        token,
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
}

module.exports = new AuthController();
