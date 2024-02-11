const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/user");
const auth = require("../middleware/verifyJwtToken");
const { userSchemaSignUpValidation } = require('../validation/userSchemaValidation');

router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
console.log('req.body', req.body)

 // Validate the request body using Zod schema
 const userData = userSchemaSignUpValidation.safeParse(req.body);
 if (userData.error) {
    return res.status(400).json({ message: "Wrong input wrong !" });
  }
  try {
    const existingUser = await User.findOne({ email : userData.data.email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log('salt', salt)
    const hashPassword = await bcrypt.hash(userData.data.password, salt);
    console.log('hashPassword', hashPassword)

    const newUser = new User({ ...userData.data, password: hashPassword });
    console.log('newUser', newUser)
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Please check Email' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Please check Password" });
    }

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    const { role } = user;

    res.status(200).json({ user, token, role }); // Send role upon successful login
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
});

router.post("/verifyToken", auth, (req, res) => {
  res.status(200).json("Welcome 🙌");
});

module.exports = router;
