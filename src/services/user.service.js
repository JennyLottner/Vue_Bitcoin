'use strict'

export const userService = {
  getUser,
}

const user = {
  name: 'Lucifer Morningstar',
  balance: 100,
  transactions: [],
}

function getUser() {
  return Promise.resolve(user)
}
