define('kayakiot/layout/column/column', function (require, exports, module) {
	var Layout = require('cabincore/layout/layout'),
		menu = require('kayakiot/modules/menu/menu'),
		header = require('kayakiot/modules/header/header'); // 这个可优化为cabin.Layout

	return Layout({
		name: 'cabinindex',   
		tpl: 'cabincore/layout/column/column.tpl',   
		widgets: {
			menu: menu,
			header:header
		}
	});
});
