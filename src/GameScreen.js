import React, {useEffect, useState} from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import {GameCanvas} from "./GameCanvas";

export function GameScreen({}) {

  const {gameId} = useParams();
  const [gameState, setGameState] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if(!socket) {
      const ws = new WebSocket('ws://www.host.com/path');
      if(ws) {
        setSocket(ws);
        ws.on('message', function incoming(data) {
          console.log(data);
        });
      }
    }


  }, []);

  let gameCanvasJsx;
  if(gameState) {
    gameCanvasJsx = (
        <GameCanvas
        />
    );
  }

  return (
      <div className="MainScreen" style={{marginBottom: "20px", marginTop: "10px"}}>
        {gameCanvasJsx}
      </div>
  );
}