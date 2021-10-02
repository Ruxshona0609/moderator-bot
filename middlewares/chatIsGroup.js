async function chatIsGroup(ctx, next){
  if(ctx.chat.type === 'channel' || ctx.chat.type === 'private') return await ctx.reply('Buyruq guruhda ishlaydi!', { reply_to_message_id: ctx.message.message_id });
  return next();
}

module.exports = { chatIsGroup };