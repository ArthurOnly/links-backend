const messages = require('../config/messages.json')

const getMessage = key => {
    return messages[key]
}

module.exports = getMessage