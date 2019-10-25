export function GameState(variant, width, height, data) {
  this.variant = variant;
  this.width = width;
  this.height = height;
  this.data = convertToRGBArray(data, width, height);
}

export const GAME_STATE_BASIC = "GAME_STATE_BASIC";

function convertToRGBArray(data, x, y) {
  const canvasData = new Uint8ClampedArray(x * y * 4);
  for (let i = 0; i < x * y * 4; i += 4) {
    canvasData[i] = data[x * y] * 255;        // R value
    canvasData[i + 1] = data[x * y] * 255;  // G value
    canvasData[i + 2] = data[x * y] * 255;    // B value
    canvasData[i + 3] = 255;  // A value
  }
  return canvasData;
}