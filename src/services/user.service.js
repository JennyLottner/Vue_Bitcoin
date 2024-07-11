export const userService = {
  getUser,
}

const user = {
  name: 'Lucifer Morningstar',
  balance: 100,
  transactions: [],
}

function getUser() {
  return user
}
