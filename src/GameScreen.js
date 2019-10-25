import React, {useEffect, useState} from "react";
import {
  Link,
  useParams
} from "react-router-dom";
import {GameCanvas} from "./GameCanvas";
import {GameState} from "./GameState/GameState";
import {useWebSocket} from "./hooks/websocketHooks";

export function GameScreen({}) {
  const {gameId} = useParams();
  const [gameState, setGameState] = useState(null);
  const [socket, setSocket] = useState(null);
  let data = useWebSocket("/chat");

  let gameCanvasJsx;
  if(gameState) {
    gameCanvasJsx = (
        <GameCanvas
            gameState={gameState}
        />
    );
  }

  return (
      <div className="MainScreen" style={{marginBottom: "20px", marginTop: "10px"}}>
        {gameCanvasJsx}
      </div>
  );
}