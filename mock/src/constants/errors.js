const errors = {
  LOGIN: [
    {
      id: '1000',
      code: 'INVALID_LOGIN',
      message: 'No user with the provided username and password found'
    }
  ],
  LOGOUT: [
    {
      id: '1001',
      code: 'NOT_LOGGED_IN',
      message: 'No user currently logged in'
    }
  ],
  UNAUTHORIZED: [
    {
      id: '1002',
      code: 'UNAUTHORIZED',
      message: 'You are not authorized'
    }
  ]
}

module.exports = {
  errors
}