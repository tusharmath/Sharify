var transfersView = function() {

	var _element = $(".transfersList")[0];

	var model = {
		transfers: ko.observableArray()
	};

	var _reload = function(transfers) {
		model.transfers.removeAll();
		transfers.forEach(function(p) {
			model.transfers.push(p);
		});
	};

	ko.applyBindings(model, _element);

	return {
		reload: _reload
	};
};