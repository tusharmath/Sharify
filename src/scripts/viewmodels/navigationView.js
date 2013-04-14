var navigationView = function(anc) {
	return
	var _element = $(".nav")[0];
	var _vm;

	var _model = {
		current: ko.observable(0)
	};

	anc.registerRoute('transactions', 'index', function(e) {
		_vm.showAllBut(_vm.tlv);
		_model.current(2);

	});

	anc.registerRoute('balances', 'index', function() {
		_vm.showAllBut(_vm.bv);
		_model.current(1);
	});


	anc.registerRoute('home', 'index', function() {
		_vm.showAllBut(_vm.spv);
		_model.current(0);
	});

	ko.applyBindings(_model, _element);
	var _setViewManager = function(vm) {
		_vm = vm;
	};

	return {
		setViewManager: _setViewManager
	};

};