var pbAnchors = function() {

	var _routes = [];

	var _converToJS = function(obj) {
		if (obj == "" || obj == null) return null;
		var items = obj.split('&');
		var result = {};
		items.forEach(function(item) {
			var p = item.split('=');
			result[p[0]] = p[1];
		});
		return result;
	};

	var _urlRoute = function(url) {
		var items = url.split('/');
		var c, a, p;

		c = items[0] === undefined ? 'home' : items[0];
		a = items[1] === undefined ? 'index' : items[1];
		p = items[2] === undefined ? null : items[2];

		return {
			controller: c,
			action: a,
			params: p
		};
	};

	var _getMatchingAction = function(route) {
		var mat;
		for (var i = 0; i < _routes.length; i++) {
			var r = _routes[i];
			if (r.controller.toLowerCase() == route.controller.toLowerCase() && r.action.toLowerCase() == route.action.toLowerCase()) {
				return r;
			}
		}

	};
	var _onAnchorClick = function() {
		var url = $(this).attr('href');
		var route = _urlRoute(url);
		var exe = _getMatchingAction(route);
		exe.callback({
			params: route.data,
			element: this
		});
		//TODO: Update url using history api
		return false;
	};

	$("a").bind('click', _onAnchorClick);

	var _registerRoute = function(controller, action, callback) {
		_routes.push({
			controller: controller,
			action: action,
			callback: callback
		});
	};

	var _getRoutes = function() {
		return _routes;
	};

	return {
		registerRoute: _registerRoute,
		routes: _getRoutes
	};
};


var pbRoutes = {

};