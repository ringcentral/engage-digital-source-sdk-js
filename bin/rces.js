#!/usr/bin/env node
require('dotenv').config()
const { resolve } = require('path')
const program = require('commander')
const { existsSync } = require('fs')

const prodRunBotPath = resolve(__dirname, '../dist/run-server.js')
const prodRunBotDevPath = resolve(__dirname, '../src/run-server.js')

const runBot = !existsSync(prodRunBotDevPath) || process.env.NODE_ENV === 'production'
  ? require(prodRunBotPath).default
  : require(prodRunBotDevPath).default

program
  .version(require('../package.json').version)
  .description('Cli tool to run RingCentral Engage Digital Source config file')
  .usage('[configFile]')
  .parse(process.argv)

let name = program.args.shift()
if (!name) {
  program.outputHelp()
} else {
  let path = resolve(name)
  runBot({
    name,
    path
  })
}
