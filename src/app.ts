import express from "express";
import { Server } from "http";
import { Update } from "./interfaces/update";
const app = express();

let http = new Server(app);


/*
    Middleware
 */
app.set("port", process.env.PORT || 3000);

export default http;
