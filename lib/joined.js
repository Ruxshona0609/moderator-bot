const { InlineKeyboard } = require('grammy');

const joinedKeyboard = id => {
  return new InlineKeyboard()
    .text('Roziman', `OK_${id}`)
}

module.exports = { joinedKeyboard };