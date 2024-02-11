require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const formRoutes = require("./routes/form.routes");
const app = express();

// database connection  
connection();

// middlewares

app.use(express.json());
app.use(cors());


//route
app.use("/forms",formRoutes);

app.listen(process.env.Port, () => {
    console.log(`Server is running at port ${process.env.Port}`);
  });
 