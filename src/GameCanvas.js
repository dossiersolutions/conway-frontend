import React, {useEffect, useRef} from "react";

function render(canvasRef, gameState) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  let clampedArray = new Uint8ClampedArray(gameState.data);
  let imageData = new ImageData(clampedArray, gameState.width, gameState.height);
  ctx.putImageData(imageData,0,0);
}

export function GameCanvas({gameState}) {

  const canvasRef = useRef(null);

  useEffect(() => {
    render(canvasRef, gameState)
  }, [canvasRef, gameState]);

  return (
      <div className="GameCanvas">
        <canvas
            key="canvas"
            ref={canvasRef}
            width={gameState.width}
            height={gameState.height}/>
      </div>
  );
}