import http from "./app";
import io from "./socket.io";

const server = http.listen(3000, () => {
    io.init();
    console.log("Listening!");
});

export default server;
