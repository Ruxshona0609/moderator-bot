async function writerIsAdmin(ctx, next) {
  await ctx.getChatMember(ctx.from.id)
    .then(d => {
      if(d.status === 'member') return ctx.reply('Buyruq faqat adminlar uchun!', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
    .catch(d => console.log(d))
}

module.exports = { writerIsAdmin };