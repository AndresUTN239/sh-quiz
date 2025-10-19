const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const connectDB = require('./db');
connectDB();

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {
  console.log(`🟢 Usuario conectado: ${socket.id}`);
  
  socket.on("disconnect", () => {
    console.log(`🔴 Usuario desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Servidor activo en puerto ${PORT}`);
});