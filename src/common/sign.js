/**
 * for data sign and verify
 */

import crypto from 'crypto'
import _ from 'lodash'

export const sign = (
  _str = '',
  secret = process.env.RINGCENTRAL_ENGAGE_DIGITAL_API_TOKEN
) => {
  const str = _.isString(_str) ? _str : JSON.stringify(_str)
  const hash = crypto.createHmac('sha512', secret)
  hash.update(str)
  return hash.digest('hex')
}

export const verify = (body, signature, secret) => {
  if (process.env.NO_SIGN_CHECK) {
    return true
  }
  return sign(body, secret) === signature
}
