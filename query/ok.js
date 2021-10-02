const { bot } = require('../core/bot');
const regex = new RegExp('OK_');

bot.callbackQuery(regex, async ctx => {
  const id = parseInt(ctx.update.callback_query.data.slice('OK_'.length, ctx.update.callback_query.data.length));
  if(ctx.update.callback_query.from.id !== id) return ctx.answerCallbackQuery({ text: 'Bu tugma siz uchun emas :)', show_alert: true });
  await ctx.deleteMessage();
  const first_name = ctx.update.callback_query.from.first_name;
  const last_name = ctx.update.callback_query.from.last_name || '';
  const msg = `Hozirgina yangi foydalanuvchimiz <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a> guruh qoidalariga rozilik bildirdi!`;
  await ctx.reply(msg, { parse_mode: 'HTML' });
  await ctx.restrictChatMember(id, { can_add_web_page_previews: true, can_change_info: true, can_invite_users: true, can_pin_messages: true, can_send_media_messages: true, can_send_messages: true, can_send_other_messages: true, can_send_polls: true });
})