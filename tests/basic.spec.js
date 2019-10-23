/* eslint-env jest */

import pack from '../package.json'
// import axios from 'axios'

require('dotenv').config()

// const {
//   RINGCENTRAL_ENGAGE_VERIFY_TOKEN
// } = process.env

function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

jest.setTimeout(99999)

describe(pack.name, function () {
  test('server runs and verify api works', async () => {
    await wait(500)
    // todo
  })
})
