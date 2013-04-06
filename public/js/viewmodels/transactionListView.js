var transactionListView = function(callback) {
	var element = $(".transactionList")[0];
	var _callback;



	var _onClick = function(item) {
		_callback(item);
	};

	var _model = {
		transactions: ko.observableArray(),
		onclick: _onClick,
		isVisble: ko.observable(false)
	};


	ko.applyBindings(_model, element);



	var _add = function(pbTransaction) {
		_model.transactions.push(pbTransaction);
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

	var _hide = function() {
		model.isVisble(false);
	};

	var _show = function() {
		model.isVisble(true);
	};


	return {
		add: _add,
		remove: _remove,
		reload: _reload,
		onclick_listItem: _onClickListItem,
		hide: _hide,
		show: _show

	};
};