var pbViewManager = function() {
	var _views = {};
	_views.tlv = new transactionListView();
	_views.bv = new balanceView();
	_views.tv = new transfersView();
	_views.ntv = new newTransactionView();

	var _showAllBut = function(view) {
		for (var i in _views) {
			if (_views[i] === view) {
				view.show(true);
			}
			_views[i].hide(false);

		}

	};
	var _hideAllBut = function(view) {
		for (var i in _views) {
			if (_views[i] === view) {
				view.hide(false);
			}
			_views[i].show(true);

		}
	};

	return {
		tlv: _views.tlv,
		bv: _views.bv,
		tv: _views.tv,
		ntv: _views.ntv,
		showAllBut: _showAllBut,
		hideAllBut: _hideAllBut

	};

};