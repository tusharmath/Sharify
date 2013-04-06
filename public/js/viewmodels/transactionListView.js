var transactionListView = function(callback) {
	var element = $(".transactionList")[0];
	var _callback;



	var _onClick = function(item) {
		_callback(item);
	};

	var _model = {
		transactions: ko.observableArray(),
		onclick: _onClick,
		isVisible: ko.observable(false)
	};


	ko.applyBindings(_model, element);



	this.add = function(pbTransaction) {
		_model.transactions.push(pbTransaction);
	};


	this.remove = function(index) {
		//TODO: add implementation
		throw NotImplementedException();

	};
	this.reload = function(trns) {
		for (var i = trns.length - 1; i >= 0; i--) {
			var trn = trns[i];
			_add(trn);
		}
	};

	this.onClickListItem = function(callback) {
		_callback = callback;
	};
	this.hide = function() {
		model.isVisible(false);
	};

	this.show = function() {
		model.isVisible(true);
	};};