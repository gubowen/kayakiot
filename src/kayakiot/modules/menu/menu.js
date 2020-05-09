;
(function () {
  var handle, _fn, CFG, kDom, temps = [],cabinMenu, AJAX, cgiMain;

  var opt = {
    menu: []
  }
  CFG = {
    CONTAINER_CLS: 'J_Menu'
  }
  handle = {
    classname: 'kayakiot-menu',
    jView: null,
    init: function (data) {
      _fn.init();
    }
  }
  _fn = {
    init: function () {
      handle.jView = kDom.get(handle.classname, $('.' + CFG.CONTAINER_CLS));
      handle.jView.kInsert();

      //本地配置menu数据
      opt.menu = [
        {
          icon: "cabin-nav-icon icon-nav-vc-gongzuotai",
          name: "demo",
          children: [
            {
              name: "jq版",
              router: "#index/kayakiot/demojq"
                },
            {
              name: "vue版",
              router: "#index/kayakiot/demovue"
                },
            {
              name: "登陆页",
              router: "#full/kayakiot/login"
                }
            ]
        }
    ];
      //菜单插件加载
      handle.jView.find('#J_menuCont').CabinMenu(opt);
      return;
      //todo-------------
      //接口拿菜单数据
      AJAX.post(cgiMain.menuTree, {}, function (res) {
        var data = res.data;
        opt.menu = data;
        //菜单插件加载
        handle.jView.find('#J_menuCont').CabinMenu(opt);
      });
    }
  }
  define('kayakiot/modules/menu/menu', function (require, exports, module) {
    require('kayakiot/modules/menu/menu.css');
    require('kayakiot/modules/menu/menu.tpl');
    //组件
    cabinMenu = require('cabin/widgets/menu/menu');

    AJAX = require('kayakiot/common/data/ajax');
    cgiMain = require('kayakiot/config/apimix');
    //底层资源
    kDom = kayak.dom;
    module.exports = handle;
  });
})();
