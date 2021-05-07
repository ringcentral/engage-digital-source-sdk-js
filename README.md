# Engage Digital JavaScript Source SDK

[![Build Status](https://travis-ci.com/ringcentral/engage-digital-source-sdk-js.svg?branch=release)](https://travis-ci.com/ringcentral/engage-digital-source-sdk-js)

Framework to create `Engage Digital channel SDK` channel for RingCentral Engage Digital. [Wiki about RingCentral Engage Digital channel SDK channel](https://github.com/ringcentral/engage-digital-source-sdk/wiki)

## Prerequisites

- Nodejs 8.10+/npm, recommend using [nvm](https://github.com/creationix/nvm) to install nodejs/npm.
- RingCentral Engage(Dimelo) account, [request a demo](https://www.ringcentral.com/digital-customer-engagement.html).

## Quick start

Let's start a simple RingCentral Engage source server .

```bash
# get the code
git clone git@github.com:ringcentral/engage-digital-source-sdk-js.git
cd engage-digital-source-sdk-js

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:6066
# Remember the https://xxxx.ap.ngrok.io, we will use it later
```

Follow [Step by step guide to create Dimelo SDK source in Admin console](docs/enable-sdk-source.md) to prepare the source.

```bash
# create env file
cp .env.sample .env
# then edit .env, set proper setting according to the tip in .env

# run local dev server
npm start
```

### Test source server

Save your source, your server will get request, you check the request log from console.

## Use it as CLI tool

```bash
npx ringcentral-engage-source path-to-your-source-server-config.js
```

## Use is as a module

[docs/direct-use.md](docs/direct-use.md)

## Post message to channel

You can get channel realtime url and api token from channel setting page, post new message to the channel.

```js
import { postMessage } from 'ringcentral-engage-source'

const endpoint = CHANNEL_REALTIME_ENDPOINT
const secret = CHENNEL_API_TOKEN

function createMsg () {
  const msg = {
    action: 'messages.create',
    params: {
      actions: ['show', 'reply'],
      id: '222',
      body: 'hi there~',
      thread_id: '34232',
      author: {
        id: 'uuuu',
        firstname: 'John',
        lastname: 'Doe',
        screenname: 'John Doe',
        created_at: new Date()
      }
    }
  }
  const result = await postMessage(msg, endpoint, secret)
  console.log(result.data)
}
```

## Real example

- Glip SDK source app: [https://github.com/ringcentral/engage-digital-sdk-source-glip](https://github.com/ringcentral/engage-digital-sdk-source-glip)
- Reddit SDK source app: [https://github.com/ringcentral/engage-digital-sdk-source-reddit](https://github.com/ringcentral/engage-digital-sdk-source-reddit)

## Write a config

[docs/write-a-config.md](docs/write-a-config.md)

## Build and Deploy to AWS Lambda

[docs/deploy-to-lambda.md](docs/deploy-to-lambda.md)

## Init a source server project with factory CLI tool

We have built-in CLI command to init a empty project from template: [https://github.com/ringcentral/engage-digital-source-server-template-js](https://github.com/ringcentral/engage-digital-source-server-template-js).

```bash
npm i -g ringcentral-engage-source
ringcentral-engage-source-create my-app
```

## License

MIT
