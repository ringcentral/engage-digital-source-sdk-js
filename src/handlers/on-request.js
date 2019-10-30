/**
 * on source request
 */

import { verify, sign } from '../common/sign'

const validObjects = [
  'messages',
  'private_messages',
  'threads'
]

const validActions = [
  'create',
  'list',
  'show',
  'delete',
  'publish',
  'show',
  'unpublish',
  'reply',
  ...(process.env.CUSTOM_ACTIONS || '').split(',')
].filter(d => d)

// from https://github.com/ringcentral-tutorials/engage-digital-source-sdk-demo/blob/master/dimelo.js
function parseAction (str) {
  // match request formatted like this: "object.action"
  const reg = /^(\w+)\.(\w+)$/
  const matched = str.match(reg)
  if (matched) {
    let object = matched[1]
    let action = matched[2]
    return { object, action }
  }
  return null
}

// from https://github.com/ringcentral-tutorials/engage-digital-source-sdk-demo/blob/master/dimelo.js
function isValidBody (body) {
  // returns false if there is no action parameter in the request body
  if (!('action' in body)) {
    return false
  }

  // no need to go further if action is implementation.info
  if (body.action === 'implementation.info') {
    return true
  }

  // stores a hash with the object and the action
  const actionHash = parseAction(body.action)

  // in case action_hash is null or there is no params parameter in a create action request
  if (
    !actionHash ||
    (
      actionHash.action === 'create' &&
      !('params' in body)
    )
  ) {
    return false
  }

  // make sure that both object AND action are valid
  return validActions.includes(actionHash.action) &&
    validObjects.includes(actionHash.object)
}

function sigValid (req) {
  return 'x-smccsdk-signature' in req.headers && verify(JSON.stringify(req.body), req.headers['x-smccsdk-signature'])
}

export default (config) => {
  return async (req, res) => {
    const { body } = req
    if (!isValidBody(body)) {
      return res
        .status(422)
        .send({ error: 'Invalid action' })
    }
    res.setHeader('Content-Type', 'application/json')
    if (sigValid(req)) {
      const response = await config.onRequest(body, req)
      res.setHeader(
        'X-SMCCSDK-SIGNATURE',
        sign(response)
      )
      return res.send(response)
    } else {
      res.status(422).send({
        error: 'Invalid signature'
      })
    }
  }
}
