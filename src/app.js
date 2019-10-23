
import express from 'express'
import bodyParser from 'body-parser'
import initWebhook from './handlers/on-request'
import morgan from 'morgan'

const {
  SERVER_HOME = '/'
} = process.env

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('server running'))

export const initApp = (conf) => {
  app.post(SERVER_HOME, initWebhook(conf))
  if (conf.appExtend) {
    conf.appExtend(app)
  }
  return app
}
