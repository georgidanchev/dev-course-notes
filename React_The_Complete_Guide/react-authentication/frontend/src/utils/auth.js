import { redirect } from "react-router-dom"

export function getTokenDuration() {
  const storedExpirationData = localStorage.getItem("expiration")
  const expirationDate = new Date(storedExpirationData)
  const now = new Date()
  const duration = expirationDate.getTime() - now.getTime()
  return duration
}

export function getAuthToken() {
  const token = localStorage.getItem("token")
  return token
}

export function tokenLoader() {
  return getAuthToken()
}

export function checkAuthLoader() {
  const token = getAuthToken()

  if (!token) {
    return null
  }

  const tokenDuration = getTokenDuration()

  if (tokenDuration < 0) {
    return "EXPIRED"
  }
}
