let baseUrl = "localhost:8080";

export async function getGameIds() {
  return await fetch(baseUrl + "game", {method: 'GET'}).then(resp => resp.json())
}

export async function getGameById(id) {
  return await fetch(baseUrl + "game/" + id, {method: 'GET'}).then(resp => resp.json())
}

export async function deleteGameById(id) {
  return await fetch(baseUrl + "game/" + id, {method: 'DELETE'})
}

export async function postGame(id, gameVariant) {
  return await fetch(baseUrl + "game", {method: 'POST', body: JSON.stringify(id, gameVariant)}).then(
      resp => resp.json())
}