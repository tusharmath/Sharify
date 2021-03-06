var transfersView = function() {

	var _element = $(".transfersList")[0];

	var model = {
		transfers: ko.observableArray(),
		isVisible: ko.observable(false)
	};

	var _reload = function(transfers) {
		model.transfers.removeAll();
		transfers.forEach(function(p) {
			model.transfers.push(p);
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