const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/signup", async (req, res) => {
  try {
    let user = await new User(req.body);
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await new User({ ...req.body, password: hashPassword }).save();
    

    res.status(201).json({ message: 'Registration successful', user : user });
    // res.json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "Please check Email" });
    }
    console.log('user.password', user.password)
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Please check Password" });
    }

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    // user.token = token;

    // user
    res.status(200).json({user:user, token:token});
  } catch (error) {
    console.log(err);
  }
});

router.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌");
});


module.exports = router;
