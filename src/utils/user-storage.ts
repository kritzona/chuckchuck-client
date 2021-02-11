export const userStorage = () => {
  const userId =
    localStorage.getItem('chuckchuck:user:id') ||
    sessionStorage.getItem('chuckchuck:user:id')
  const userAccessToken =
    localStorage.getItem('chuckchuck:user:access-token') ||
    sessionStorage.getItem('chuckchuck:user:access-token')

  return {
    userId,
    userAccessToken,
  }
}
export const initUserStorage = (
  userId: string,
  userAccessToken: string,
  remember: boolean,
) => {
  if (remember) {
    localStorage.setItem('chuckchuck:user:id', userId)
    localStorage.setItem('chuckchuck:user:access-token', userAccessToken)
  } else {
    sessionStorage.setItem('chuckchuck:user:id', userId)
    sessionStorage.setItem('chuckchuck:user:access-token', userAccessToken)
  }
}
export const cleanUserStorage = () => {
  localStorage.removeItem('chuckchuck:user:id')
  localStorage.removeItem('chuckchuck:user:access-token')

  sessionStorage.removeItem('chuckchuck:user:id')
  sessionStorage.removeItem('chuckchuck:user:access-token')

  return true
}
