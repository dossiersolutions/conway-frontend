let baseUrl = "localhost:8080";

export async function getGameIds() {
  return await fetch(baseUrl + "game")
}