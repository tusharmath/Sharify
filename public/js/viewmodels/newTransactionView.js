var newTransactionView = function(alerter) {

	var _element = $(".commandBox")[0];
	var _parser = new pbParser();
	var _callback;

	var _onclick_addButton = function(callback) {
		_callback = callback;
	};

	var _addButton = function() {
		try {
			var t = ko.toJS(this);
			var data = _parser.parse(t);
			_callback(data);
		} catch (e) {
			alerter.show(e);
		}

	};

	var _clearAll = function() {
		//TODO: add implementation
		throw NotImplementedException();
	};

	var _load = function(pbTrn) {

		model.tag(pbTrn.tag);
		model.amount(pbTrn.amount);
		model.payers(pbTrn.payers.toString());
		model.payees(pbTrn.payees.toString());
		model.remarks(pbTrn.remarks);

	};

	var model = {

		/*
		tag: ko.observable(),
		amount: ko.observable(),
		payers: ko.observable(),
		payees: ko.observable(),
		remarks: ko.observable(),
		*/
		isVisible: ko.observable(false),

		tag: ko.observable("home"),

		amount: ko.observable(6000),
		payers: ko.observable("a=1000, b=2000, c=3000"),
		payees: ko.observable("a=500, b=1000, c=1500, d=500, e=2000, f=500"),
		remarks: ko.observable("this is a sample test"),


		addButton: _addButton
	};

	var _hide = function() {
		model.isVisble(false);
	};

	var _show = function() {
		model.isVisble(true);
	};


	ko.applyBindings(model, _element);

	return {
		load: _load,
		onclick_addButton: _onclick_addButton,
		hide: _hide,
		show: _show

	};
};