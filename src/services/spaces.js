const BASE_URL = "../db.json"

export async function getSpace() {
  const response = await fetch(`${BASE_URL}/spaces`)
  return await response.json()
}

export async function getSpaces(id) {
  const response = await fetch(`${BASE_URL}/spaces/${id}`)
  return await response.json()
}
