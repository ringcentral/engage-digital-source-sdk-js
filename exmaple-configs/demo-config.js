/**
 * default handler
 */

// handle all events
exports.onRequest = async (body, req) => {
  console.log('body:', body)
  const { action, param } = body
  console.log('param', param)
  // check https://github.com/ringcentral/engage-digital-source-sdk/wiki for more info
  switch (action) {
    case 'implementation.info':
      return {
        objects:
        {
          messages: ['create', 'show', 'list'],
          private_messages: ['create', 'show', 'list'],
          threads: ['create', 'show', 'list']
        },
        options: []
      }

    case 'threads.list':
    case 'private_messages.list':
    case 'messages.list':
      return []

    case 'threads.show':
    case 'private_messages.show':
    case 'messages.show':
      return ''

    default:
      return {}
  }
}

// extends express app as you need
exports.appExtend = (app) => {
  // app.get('/some-route', (req, res) => res.end('some'))
}
