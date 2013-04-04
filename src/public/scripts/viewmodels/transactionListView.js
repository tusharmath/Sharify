var transactionListView = function(callback) {
	var element = $(".transactionList")[0];
	var _callback;



	var _onClick = function(item) {
		_callback(item);
	};

	var _model = {
		transactions: ko.observableArray(),
		onclick: _onClick
	};


	ko.applyBindings(_model, element);
	

	var _convertSharesToString = function(items) {

		var _items = [];
		for (var i = items.length - 1; i >= 0; i--) {
			var item = items[i];
			_items.push(item.user + " = " + item.amount);

		}
		return _items.join(", ");
	};

	var _add = function(trn) {
		trn.amount = 0;
		trn.payers.forEach(function(u) {
			trn.amount += u.amount;
		});

		trn.payees = _convertSharesToString(trn.payees);
		trn.payers = _convertSharesToString(trn.payers);

		_model.transactions.push(trn);
	};


	var _remove = function(index) {
		//TODO: add implementation
		throw NotImplementedException();

	};
	var _reload = function(trns) {
		for (var i = trns.length - 1; i >= 0; i--) {
			var trn = trns[i];
			_add(trn);
		}
	};

	var _onClickListItem = function(callback) {
		_callback = callback;
	};

	return {
		add: _add,
		remove: _remove,
		reload: _reload,
		onclick_listItem: _onClickListItem

	};
};