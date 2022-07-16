import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/UserRoute.js";

// Routes
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log(chalk.bgBlue("DB Connect")))
      .catch((err) => console.log(chalk.bgRed(err)));

    app.listen(process.env.PORT, (err) => {
      if (err) {
        return console.log(chalk.bgRed(err));
      }
      console.log(chalk.bgBlue(`Starting Server on port ${process.env.PORT}`));
    });
  } catch (error) {
    console.log(chalk.bgRed(error));
  }
};

start();

// usage of routes

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
