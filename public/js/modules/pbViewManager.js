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
			} else {
				_views[i].hide(false);
			}

		}

	};
	var _hideAllBut = function(view) {
		for (var i in _views) {
			if (_views[i] === view) {
				view.hide(true);
			} else {
				_views[i].show(false);
			}

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