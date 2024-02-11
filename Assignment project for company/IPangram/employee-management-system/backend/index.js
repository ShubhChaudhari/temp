require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const connection = require("./db");

const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employee");
const departmentRoutes = require("./routes/department")

const app = express();
app.use(bodyParser.json());
app.use(cors());

// database connection
connection();

//  routes

app.use("/auth",authRoutes);
app.use("/employee",employeeRoutes);
app.use("/department", departmentRoutes);

app.listen(process.env.Port, () => {
  console.log(`Server is running at port ${process.env.Port}`);
});
