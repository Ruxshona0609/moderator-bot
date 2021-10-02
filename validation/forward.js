const { bot } = require('../core/bot');

bot.on(':forward_date', async ctx => {
  await ctx.getChatMember(ctx.message.from.id)
    .then(d => {
      if(d.status === 'creator' || d.status === 'administrator') return;
      ctx.deleteMessage();
      const first_name = ctx.message.from.first_name;
      const last_name = ctx.message.from.last_name || '';
      const id = ctx.message.from.id;
      const msg = `Iltimos guruhda reklama tarqatmang <a href="tg://user?id=${id}">${first_name + last_name}</a> !`;
      ctx.reply(msg, { parse_mode: 'HTML' });
    })
})