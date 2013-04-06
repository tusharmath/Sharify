var balanceView = function() {

	var _element = $(".balanceList")[0];

	var model = {
		balances: ko.observableArray(),
		isVisible: ko.observable(false)
	};

	this.reload = function(balances) {
		model.balances.removeAll();
		balances.forEach(function(p) {
			model.balances.push(p);
		});
	};

	this._hide = function() {
		model.isVisible(false);
	};

	this._show = function() {
		model.isVisible(true);
	};

	ko.applyBindings(model, _element);

};