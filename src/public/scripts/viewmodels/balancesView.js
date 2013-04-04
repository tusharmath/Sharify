var balanceView = function() {

	var _element = $(".balanceView")[0];

	var model = {
		balances: ko.observableArray()
	};

	var _reload = function(balances) {
		model.balances.removeAll();
		balances.forEach(function(p) {
			model.balances.push(balances);
		});
	};

	ko.applyBindings(model, _element);

	return {
		reload: _reload
	};
};