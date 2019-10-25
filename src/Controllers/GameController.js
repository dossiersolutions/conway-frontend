let baseUrl = "localhost:8080/game";

export async function getGameIds() {
  return await fetch(baseUrl)
}

export async function deleteGame(id) {
  return await fetch(baseUrl + id, {method: "DELETE"})
}