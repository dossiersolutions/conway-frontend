export function GameState(variant, width, height, data) {
  this.variant = variant;
  this.width = width;
  this.height = height;
  this.data = data;
}

export const GAME_STATE_BASIC = "GAME_STATE_BASIC";