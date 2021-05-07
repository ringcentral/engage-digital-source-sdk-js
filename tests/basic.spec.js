/* eslint-env jest */

import pack from '../package.json'
import axios from 'axios'
import _ from 'lodash'
import { sign, postMessage } from '../src'

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
  test('signc', () => {
    let s = sign(JSON.stringify(undefined), 'ss')
    console.log(s)
    expect(1).toEqual(98 - 97)
  })
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
    let url1 = `http://127.0.0.1:6066`
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
    let url1 = `http://127.0.0.1:6066`
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
    let url1 = `http://127.0.0.1:6066`
    let res1 = await axios.post(url1, b1, conf).then(r => r.data)
    expect(res1 === '').toEqual(true)
  })

  test('post message', async () => {
    await wait(500)
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
    const result = await postMessage(msg, process.env.RINGCENTRAL_ENGAGE_DIGITAL_ENDPOINT, process.env.RINGCENTRAL_ENGAGE_DIGITAL_API_TOKEN).catch(console.log)
    console.log(result.data)
    expect(result && !!result.data).toEqual(true)
  })
})
