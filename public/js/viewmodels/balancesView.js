var balanceView = function() {

	var _element = $(".balanceList")[0];

	var model = {
		balances: ko.observableArray(),
		isVisible: ko.observable(false)
	};

	var _reload = function(balances) {
		model.balances.removeAll();
		balances.forEach(function(p) {
			model.balances.push(p);
		});
	};

	var _hide = function() {
		model.isVisible(false);
	};

	var _show = function() {
		model.isVisible(true);
	};

	ko.applyBindings(model, _element);

	return {
		reload: _reload,
		hide: _hide,
		show: _show
	};
};