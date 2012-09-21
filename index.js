var $ = global.jQuery || global.$;
if (typeof $ === 'undefined' || typeof $.jquery === 'undefined')
  throw new Error('Failed to load module jquery-cjs: jQuery is not defined in the global scope.');
module.exports = $;
