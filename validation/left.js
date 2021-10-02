const { bot } = require('../core/bot');

bot.on('msg:left_chat_member', async ctx => {
  await ctx.deleteMessage();
})