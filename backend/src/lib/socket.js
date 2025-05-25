import { Server } from "socket.io";

const userSocketMap = {}; // {userId: socketId}
let ioInstance = null;

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

export function initSocket(server) {
  ioInstance = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      credentials: true,
    },
  });

  ioInstance.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;
    ioInstance.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      delete userSocketMap[userId];
      ioInstance.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });
}

export function getIO() {
  return ioInstance;
}