/* eslint-env jest */

import pack from '../package.json'
import axios from 'axios'
import _ from 'lodash'
import { sign } from '../src/common/sign'

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
  test('implementation.info', async () => {
    await wait(500)
    let b1 = {
      action: 'implementation.info'
    }
    let conf = {
      headers: {
        'X-SMCCSDK-SIGNATURE': sign(b1)
      }
    }
    let url1 = `http://localhost:6066`
    let res1 = await axios.post(url1, b1, conf).then(r => r.data)
    expect('objects' in res1).toEqual(true)
  })

  test('threads.list', async () => {
    await wait(500)
    let b1 = {
      action: 'threads.list'
    }
    let conf = {
      headers: {
        'X-SMCCSDK-SIGNATURE': sign(b1)
      }
    }
    let url1 = `http://localhost:6066`
    let res1 = await axios.post(url1, b1, conf).then(r => r.data)
    expect(_.isArray(res1)).toEqual(true)
  })

  test('threads.show', async () => {
    await wait(500)
    let b1 = {
      action: 'threads.show'
    }
    let conf = {
      headers: {
        'X-SMCCSDK-SIGNATURE': sign(b1)
      }
    }
    let url1 = `http://localhost:6066`
    let res1 = await axios.post(url1, b1, conf).then(r => r.data)
    expect(res1 === '').toEqual(true)
  })
})
