var commandView = function(element) {


	var model = {
		tag: ko.observable("home"),

		amount: ko.observable("3000"),
		payers: ko.observable("a, b, c, d"),
		payees: ko.observable("a, b, c, d, w, e"),
		remarks: ko.observable("this is a sample test")
	};

	ko.applyBindings(model, element);
	return {
		data: function() {
			return ko.toJS(model);
		}
	};

};