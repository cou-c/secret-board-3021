'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      // TODO ログアウト処理
      util.handleLogout(req,res);
      break;
    default:
      break;
  }
}

module.exports = {
  route
};