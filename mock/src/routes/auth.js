const express = require('express');

const { session, users } = require('../state');
const { errors } = require('../constants');

const router = express.Router()

router.get('/currentUser', (req, res) => {
  const userId = req.session.userId;

  if (userId && session[userId]) {
    const user = users.find(user => user.id === userId);
    return res.status(200).send(user);
  }
  return res.status(401).send(errors.UNAUTHORIZED);
})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (user && user.password === password) {
    session[user.id] = user;
    req.session.userId = user.id;
    return res.status(204).send();
  }
  return res.status(400).send(ss.LOGIN);
})

router.post('/logout', (req, res) => {
  const userId = req.session.userId;

  if (userId) {
    delete session[userId];
    return res.status(204).send();
  }
  return res.status(400).send(ss.LOGOUT);
})

module.exports = router