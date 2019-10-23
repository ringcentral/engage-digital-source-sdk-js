# engage-digital-source-sdk-js

SDK(js) to create custom source for RingCentral Engage Digital. [Wiki about RingCentral Engage Digital custom source](https://github.com/ringcentral/engage-digital-source-sdk/wiki)



## Prerequisites

- Nodejs 8.10+/npm, recommend using [nvm](https://github.com/creationix/nvm) to install nodejs/npm.
- RingCentral Engage(Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).

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

Follow [Step by step guide to enable SDK source](docs/enable-sdk-source.md) to prepare the source and webhook. You could choose only one source.

```bash
# create env file
cp .env.sample .env
# then edit .env, set proper setting according to the tip in .env

# run local dev server
npm start
```

### Test source server

Save your source, your server will get request.

## Use it as CLI tool

```bash
npx ringcentral-engage-source path-to-your-source-server-config.js
```

## Use is as a module

todo

## Real example

todo

## Write a config

todo

## Build and Deploy to AWS Lambda

todo

## Init a bot/bot skill project with factory CLI tool

todo

## License

MIT


