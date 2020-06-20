const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const reminders = require('./routes/reminders')

const app = express()
app.use(bodyParser.json());
app.use(cors());

const myMiddleware = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next()
}

app.use(myMiddleware)

app.get('/', (_, res) => {
  res.json({ message: 'pong' })
})

app.use('/reminders', reminders)

const server = app.listen(3000, () => {
  console.log(`Listening on port http://localhost:${server.address().port}`)
})