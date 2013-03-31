var commandView = function(element) {


	var model = {
		tag: ko.observable("home"),

		amount: ko.observable(6000),
		payers: ko.observable("a=1000, b=2000, c=3000"),
		payees: ko.observable("a=500, b=1000, c=1500, d=500, e=2000, f=500"),
		remarks: ko.observable("this is a sample test")
	};

	ko.applyBindings(model, element);
	return {
		data: function() {
			return ko.toJS(model);
		}
	};

};