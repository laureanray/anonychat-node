import express from "express";
import { Server } from "http";
import { Update } from "./interfaces/update";
const app = express();
let http = new Server(app);

/*
    Middleware
 */
app.set("port", process.env.PORT || 3000);
app.get("/room/:roomName", (req, res, next) => {
    console.log(req.params);
});
app.get("/", (req, res, next) => {
    res.send({message: "Server is up!"});
})

export default http;
