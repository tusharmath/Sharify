var startPageView = function() {
	var _element = $('.jumbotron')[0];
	var _vm;
	var _onGetStartedClicked = function() {
		_vm.showAllBut(_vm.ntv);
	};
	var _model = {
		isVisible: ko.observable(true),
		onGetStartedClick: _onGetStartedClicked
	};

	var _hide = function() {
		_model.isVisible(false);
	};

	var _show = function() {
		_model.isVisible(true);
	};



	ko.applyBindings(_model, _element);
	var _setViewManager = function(vm) {
		_vm = vm;
	};
	return {
		setViewManager: _setViewManager,
		hide: _hide,
		show: _show
	};

};