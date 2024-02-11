require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const authRoutes = require("./routes/auth");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");

const app = express();

// database connection  
connection();

// middlewares

app.use(express.json({limit: '50mb'}));
app.use(cors());


//route
app.use("/api/user",authRoutes);
app.use("/api/brand",brandRoutes);
app.use("/api/product",productRoutes);


app.listen(process.env.Port, () => {
    console.log(`Server is running at port ${process.env.Port}`);
  });
