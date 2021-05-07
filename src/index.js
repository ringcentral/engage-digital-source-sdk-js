import { initApp } from './app'
import * as defaultConfig from './handlers/default'
export * from './common/post-message'
export * from './common/sign'

export const createApp = (config) => {
  const conf = Object.assign({}, defaultConfig, config)
  let app = initApp(conf)
  return app
}
