define('kayakiot/pages/login/login', function (require, exports, module) {
  var handle, page;
  var AJAX = require('kayakiot/common/data/ajax');
  var cgiMain = require('kayakiot/config/apimix');

  page = Page({
    nodeClass: 'kayakiot-pages-login',
    parentClass: 'J_Main', // 没有就直接插入body，或者不插入
    source: ['kayakiot/pages/login/login.tpl', 'kayakiot/pages/login/login.css'],
    show: function () {
      handle.jView = this.jView;
    },
    hide: function () {}
  });
  handle = {};
  return page;
});
