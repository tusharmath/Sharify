var navigationView = function() {
	var _element = $(".nav")[0];

	var _onclick = function(index) {
		_model.current(index)
	};
	var _model = {
		current: ko.observable(1),
		onClick: _onclick
	};

	ko.applyBindings(_model, _element);

};