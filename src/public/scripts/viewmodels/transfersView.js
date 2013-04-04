var transfersiew = function() {

	var _element = $(".transfersView")[0];

	var model = {
		transfers: ko.observableArray()
	};

	var _reload = function(transfers) {
		model.transfers.removeAll();
		transfers.forEach(function(p) {
			model.transfers.push(transfers);
		});
	};

	ko.applyBindings(model, _element);

	return {
		reload: _reload
	};
};