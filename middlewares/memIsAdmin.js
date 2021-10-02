async function memIsAdmin(ctx, next){
  await ctx.getChatMember(ctx.message.reply_to_message.from.id)
    .then(d => {
      if(d.status === 'administrator' || d.status === 'creator') return ctx.reply('Adminni bloklash mumkin emas!', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
    .catch(d => console.log(d))
}

module.exports = { memIsAdmin }