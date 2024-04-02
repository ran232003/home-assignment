let io;
//with this logic i can export io accross files
module.exports = {
  init: (httpServer) => {
    const { Server } = require("socket.io");
    io = new Server(httpServer, {
      cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
    });
    return io;
  },
  getIO: () => {
    //like singletone
    if (!io) {
      throw new Error("Soket IO was not init");
    }
    return io;
  },
};
