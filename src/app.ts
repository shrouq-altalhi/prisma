import express from "express";
import { connectDB } from "./config/db";
import router from "./route/movie.route";
import route from "./route/user.route";

const app = express();
const port = 5001;
//Config
connectDB();

//Middleware
app.use(express.json());
app.use("/movie", router);
app.use("/user", route);

app.listen(port, () => {
  console.log(`Server running in port ${port} `);
});
