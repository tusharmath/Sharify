var navigationView = function() {
	var _element = $(".nav")[0];
	var _vm;
	var _onclick = function(index) {
		_model.current(index);

		switch (index) {
			case 2:
				_vm.showAllBut(vm.tlv);
				break;
			case 1:
				_vm.showAllBut(vm.bv);
				break;
		}
	};
	var _model = {
		current: ko.observable(0),
		onClick: _onclick
	};

	ko.applyBindings(_model, _element);
	var _setViewManager = function(vm) {
		_vm = vm;
	};
	return {
		setViewManager: _setViewManager
	};

};