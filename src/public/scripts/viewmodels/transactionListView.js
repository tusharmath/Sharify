var transactionListView = function(element) {
	var model = {
		transactions: ko.observableArray()
	};
	ko.applyBindings(model, element);

	return {};
};