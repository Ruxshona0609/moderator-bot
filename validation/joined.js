const { bot } = require('../core/bot');

bot.on('msg:new_chat_members', async ctx => {
  await ctx.deleteMessage();
  ctx.message.new_chat_members.forEach(u => {
    if(u){
      const first_name = u.first_name;
      const last_name = u.last_name || '';
      const id = u.id;
      const msg = `Guruhda yangi a'zo <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a>`
      ctx.reply(msg, { parse_mode: 'HTML' });
      ctx.restrictChatMember(id, { can_send_messages: false });
    }
  });
})