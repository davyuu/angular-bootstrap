const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const openapiSpec = YAML.load('../openapi/openapi.yaml');

const auth = require('./routes/auth')
const reminders = require('./routes/reminders')

const myMiddleware = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next()
}

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'Some secret',
  resave: false,
  saveUninitialized: true
}));
app.use(myMiddleware)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
app.use('/reminders', reminders)
app.use('/auth', auth)

app.get('/', (_, res) => {
  res.json({ message: 'pong' })
})

const server = app.listen(3000, () => {
  console.log(`Listening on port http://localhost:${server.address().port}`)
})