'use strict';

/*
 * 1、以.jq结尾的文件可以通过 npm run watch(修改.jq文件生效) 或 npm run build 命令编译成.js文件
 * 2、.jq文件支持es6编写
 */
define('kayakiot/pages/demojq/demojq', function (require, exports, module) {
  var handle, _fn, page;
  page = Page({
    nodeClass: 'kayakiot-pages-demojq',
    parentClass: 'J_Main', // 没有就直接插入body，或者不插入
    source: ['kayakiot/pages/demojq/demojq.css', 'kayakiot/pages/demojq/demojq.tpl'],
    show: function show() {
      handle.jView = this.jView;
      /*页面进入触发*/
      /*分页插件*/
      $('#page').NextPage({
        pageSize: 30, //每页大小,
        currentPage: 1, //当前页
        totalCount: 0, //总条数
        pageRange: 9, //间隔多少个
        select: [30, 60, 100], //下拉选项
        showTotal: false, //显示总条数 boolean
        position: null, //位置 left right center 默认right
        callback: function callback(data) {
          console.log(data);
        }
      });
    },
    hide: function hide() {
      /*页面离开触发*/
    },
    on: {
      /*事件绑定  事件名  筛选器 回调方法*/
      'click .show': function clickShow() {
        //todo
      }

    }
  });
  handle = {};
  _fn = {};
  return page;
});