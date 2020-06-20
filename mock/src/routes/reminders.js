const express = require('express');

const REMINDERS = [
  {
    id: 1,
    title: 'reminder 1',
    body: 'body 1'
  }, {
    id: 2,
    title: 'reminder 2',
    body: 'body 2'
  }
];

const router = express.Router()

router.get('/', (_, res) => {
  res.status(200).send(REMINDERS);
})

module.exports = router