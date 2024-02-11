 const checkManagerRole = (req, res, next) => {
    const userRole = req.headers['role'];
    console.log('userRole', userRole)
  if (userRole !== "manager") {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = checkManagerRole