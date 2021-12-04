# moderator-bot
built with grammy package



const { bot } = require('../core/bot');const { chatIsGroup, isReply, userIsMem, memIsAdmin, writerIsAdmin } = require('../middlewares/index'); bot.command('ban', chatIsGroup, writerIsAdmin, isReply, userIsMem, memIsAdmin, async ctx => { const first_name = ctx.message.reply_to_message.from.first_name; const last_name = ctx.message.reply_to_message.from.last_name || ''; const id = ctx.message.reply_to_message.from.id; const cause = ctx.message.text.slice('/ban'.length + 1, ctx.message.text.length) || 'Qoida buzarlik!'; const msg = `Foydalanuvchi <a href="tg://user?id=${id}">${ first_name + ' ' + last_name }</a> bloklandi!\nSababi: ${cause}`; await ctx.banChatMember(id); await ctx.deleteMessage(); return await ctx.reply(msg, { parse_mode: 'HTML' });})
