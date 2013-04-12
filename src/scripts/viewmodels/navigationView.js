var navigationView = function() {
	var _element = $(".nav")[0];
	var _vm;
	var _onclick = function(index) {
		_model.current(index);
		if (index > 0) $(".hero-unit").hide();
		switch (index) {
			case 0:
				$(".hero-unit").show();
				break;
			case 1:
				_vm.showAllBut(vm.ntv);
				break;
			case 2:
				_vm.showAllBut(vm.tlv);
				break;
			case 3:
				_vm.showAllBut(vm.bv);
				break;
			case 4:
				_vm.showAllBut(vm.tv);
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