var transfersView = function() {

	var _element = $(".transfersList")[0];

	var model = {
		transfers: ko.observableArray(),
		isVisible: ko.observable(false)
	};

	this.reload = function(transfers) {
		model.transfers.removeAll();
		transfers.forEach(function(p) {
			model.transfers.push(p);
		});
	};

	this.hide = function() {
		model.isVisible(false);
	};

	this.show = function() {
		model.isVisible(true);
	};

	ko.applyBindings(model, _element);

};