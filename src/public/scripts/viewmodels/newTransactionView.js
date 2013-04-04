var newTransactionView = function(callback) {

	var _element = $(".commandBox")[0];
	var _parser = new pbParser();


	var _addButton = function() {

		var t = ko.toJS(this);
		var data = _parser.parse(t);
		callback(data);
	};

	var _clearAll = function(){};

	var _load = function() {
		//TODO: add implementation
		throw NotImplementedException();
	};

	var model = {
		tag: ko.observable("home"),

		amount: ko.observable(6000),
		payers: ko.observable("a=1000, b=2000, c=3000"),
		payees: ko.observable("a=500, b=1000, c=1500, d=500, e=2000, f=500"),
		remarks: ko.observable("this is a sample test"),
		addButton: _addButton
	};



	ko.applyBindings(model, _element);

	return {
		load: _load

	};
};