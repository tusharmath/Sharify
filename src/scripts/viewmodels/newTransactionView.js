var newTransactionView = function(anc) {

	var _element = $("#createTransaction")[0];
	var _parser = new pbParser();
	var _callback;
	var _alerter;

	var _onclick_addButton = function(callback) {
		_callback = callback;
	};

	var _addButton = function() {
		try {
			var t = ko.toJS(this);
			var data = _parser.parse(t);
			_callback(data);
		} catch (e) {
			_alerter.show(e);
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



		isVisible: ko.observable(false),
		///*
		tag: ko.observable("home"),
		amount: ko.observable(6000),
		payers: ko.observable("ash=1000, tushar=2000, rajesh=3000"),
		payees: ko.observable("poo=500, satti=1000, mel=1500, mayank=500, jenna=2000, frutal=500"),
		remarks: ko.observable("this is a sample test"),
		//*/
		/*
		tag: ko.observable(),
		amount: ko.observable(),
		payers: ko.observable(),
		payees: ko.observable(),
		remarks: ko.observable(),
		*/
		addButton: _addButton
	};
	var _hide = function() {
		model.isVisible(false);
	};

	var _show = function() {
		model.isVisible(true);
	};

	var _setAlerter = function(alerter) {
		_alerter = alerter;
	};

	ko.applyBindings(model, _element);

	return {
		load: _load,
		onclick_addButton: _onclick_addButton,
		hide: _hide,
		show: _show,
		setAlerter: _setAlerter

	};
};