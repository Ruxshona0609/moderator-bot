const { chatIsGroup } = require('./chatIsGroup');
const { isReply } = require('./isReply');
const { userIsMem } = require('./userIsMem');
const { memIsAdmin } = require('./memIsAdmin');
const { writerIsAdmin } = require('./writerIsAdmin');

module.exports = { chatIsGroup, isReply, userIsMem, memIsAdmin, writerIsAdmin };