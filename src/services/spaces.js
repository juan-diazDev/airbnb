const BASE_URL = "http://localhost:8080"

export async function getSpace() {
  const response = await fetch(`${BASE_URL}/spaces`)
  return await response.json()
}

export async function getSpaces(id) {
  const response = await fetch(`${BASE_URL}/spaces/${id}`)
  return await response.json()
}
