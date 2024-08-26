const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    // if user esixt shows : "user already exist."
    const userExists = await UserModel.findOne({ email: req.body.email });
    if (userExists) {
      res.send({
        success: false,
        message: "user already Exist.",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // Add new user data to databasee
    const newUser = await UserModel(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: " User Registered Successfully",
    });
  } catch (error) {
    // if any other error found
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Checking if user is registered.
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      res.send({
        success: false,
        message: "You are not registered. Please register first !",
      });
    }

    // Compare hashing password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if user entered wrong password
    if (!validPassword) {
      res.send({
        success: false,
        message: "Invalid Password, koi baat nhi fir se try karo ! ",
      });
    }

    //jwt token generation
    const token = jwt.sign({ userId: user._id }, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    });

    // user susccessfully logedin
    res.send({
      success: true,
      user: user,
      message: "User log in successfull",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
});

// Verifying if token is already existed
router.get("/get-current-user", authMiddleware, async (req, res) => {
  res.send({ success: "login", message: "user Login" });
});
module.exports = router;
