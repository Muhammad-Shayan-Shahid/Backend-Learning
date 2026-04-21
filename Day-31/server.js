import { Socket } from "dgram";
import app from "./src/app.js"
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
   console.log("New connection")
   socket.on("message" , ()=>{
    console.log("User fired message...")
   })
});

httpServer.listen(3000 , ()=>{
    console.log("Server is runinng : 3000")
});

