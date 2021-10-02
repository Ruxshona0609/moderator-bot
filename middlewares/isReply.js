async function isReply(ctx, next){
  if(!ctx.message.reply_to_message) return await ctx.reply('Reply bilan!', { reply_to_message_id: ctx.message.message_id });
  return next();
}

module.exports = { isReply };