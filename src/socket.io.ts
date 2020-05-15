import {Socket} from 'socket.io';
import {Update} from "./interfaces/update";
import http from "./app";
let io = require("socket.io")(http);

const update = (socket: Socket) => {
    const update = new Update(io.engine.clientsCount);
    io.emit("update", update);
}


io.init = () => {
    io.on("connect", (socket: Socket) => {
        update(socket);
        console.log("User connected: " + socket.id);
        socket.on("join", (room: any, callback: any) => {
            console.log('join');
            socket.join(room);
            socket.to(room).emit('user_join');
        });
    });

    io.on("disconnect", (socket: Socket) => {
        update(socket);
    });
}

export default io;
