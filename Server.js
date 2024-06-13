import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./routes/ToDoRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const DB = "mongodb+srv://dahamnihci:70qKAwL0Il3Bfgeo@cluster0.aesg9w4.mongodb.net/to-do-application?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("App is listening on port 5000!");
});
