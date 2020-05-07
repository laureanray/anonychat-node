import {Socket} from 'socket.io';
import {Update} from "./interfaces/update";
import http from "./app";
let io = require("socket.io")(http);

const update = (socket: Socket) => {
    console.log(socket.id);
    const update = new Update(io.engine.clientsCount);
    io.emit("update", update);
}

io.init = () => {
    io.on("connect", (socket: Socket) => {
        update(socket);
    });

    io.on("disconnect", (socket: Socket) => {
        update(socket);
    });
}

export default io;
