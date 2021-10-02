async function userIsMem(ctx, next) {
  await ctx.getChatMember(ctx.message.reply_to_message.from.id)
    .then(d => {
      if(d.status === 'kicked') return ctx.reply('Foydalanuvchi guruhdan bloklanib bo\'lgan!', { reply_to_message_id: ctx.message.message_id });
      if(d.status === 'left') return ctx.reply('Foydalanuvchi guruhdan chiqib ketgan!', { reply_to_message_id: ctx.message.message_id });
      return next();
    })
    .catch(d => console.log(d))
}

module.exports = { userIsMem };