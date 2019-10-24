# Direct use, no CLI

You can certainly use it as a module instead of a CLI tool.

Check [src/run-server.js](../src/run-server.js)

## For nodejs server

```js
import { createApp } from 'ringcentral-engage-source'

console.log('-> bot:', path)
const conf = require(pathToBotConfigJS)
const app = createApp(conf)
app.listen(RINGCENTRAL_ENGAGE_SOURCE_EXPRESS_PORT, RINGCENTRAL_ENGAGE_SOURCE_EXPRESS_HOST, () => {
  console.log(`-> server running at: http://${RINGCENTRAL_ENGAGE_SOURCE_EXPRESS_HOST}:${RINGCENTRAL_ENGAGE_SOURCE_EXPRESS_PORT}`)
})
```

## For AWS Lambda

```js
import { createApp } from 'ringcentral-engage-source'

const path = './auto-reply-all.js'
console.log('-> bot:', path)
const conf = require(path)
const app = createApp(conf)

export default app

```
