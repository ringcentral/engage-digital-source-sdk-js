import { sign } from './sign'
import axios from 'axios'

/**
 * post message to channel real time url
 * @param {*} body // the post request body, js object
 * @param {*} endpoint // get the endpoint url from channel setting
 * @param {*} secret  // it is the api token from channel setting
 *
 * example body would be like:
 *
{
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
      screenname: 'John Doe'
    }
  }
}
 */
export const postMessage = async (
  body,
  endpoint,
  secret
) => {
  const sig = sign(body, secret)
  return axios.post(endpoint, body, {
    headers: {
      'X-SMCCSDK-SIGNATURE': sig,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
