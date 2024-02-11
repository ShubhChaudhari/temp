import dotenv from 'dotenv'; // Import dotenv using ESM syntax
import express from 'express';
// import bodyParser from 'body-parser';
import connectDB from './db.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// database connection  
dotenv.config();
connectDB();

// middlewares

app.use(express.json({limit: '50mb'}));


//route
app.use("/", userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
