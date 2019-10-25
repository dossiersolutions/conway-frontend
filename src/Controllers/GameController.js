let baseUrl = "http://localhost:8080/";

export async function getGameIds() {
  return await fetch(baseUrl + "game", {method: 'GET'}).then(resp => resp.json())
}

export async function getGameById(id) {
  return await fetch(baseUrl + "game/" + id, {method: 'GET'}).then(resp => resp.json())
}

export async function deleteGameById(id) {
  return await fetch(baseUrl + "game/" + id, {method: 'DELETE'})
}

export async function createGame(gameVariant) {
  return await fetch(baseUrl + "game", {method: 'POST', body: JSON.stringify(gameVariant)}).then(
      resp => resp.json())
}