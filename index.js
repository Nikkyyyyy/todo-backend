import express from "express";
import { connectDb } from "./db.connect.js";

const app = express();

const port = 4000;
//connect db
connectDb();

//register routes

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
