import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("🟢 Conectado al servidor con ID:", socket.id);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>🎮 SH Quiz</h1>
    </div>
  );
}

export default App;
