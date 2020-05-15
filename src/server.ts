import http from "./app";
import io from "./socket.io";

const server = http.listen(8080, () => {
    io.init();
    console.log("Listening!");
});

export default server;
