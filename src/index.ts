// imports packages
import express from "express";   
import helmet from "helmet";   
import path from "path";   
import dotenv from "dotenv";

const app = express();

// imports elements
import indexRouter from "../routers/index";

// middlewares
dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// will work there
app.use("/", indexRouter);

app.listen(process.env.MY_PORT);
