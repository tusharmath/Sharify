var pbViewManager = function(init) {
	var _views = {};
	//Create instances


	_views.tlv = new transactionListView();
	_views.bv = new balanceView();
	_views.tv = new transfersView();
	_views.ntv = new newTransactionView();
	_views.nv = new navigationView();


	var _showAllBut = function(view) {
		for (var i in _views) {
			if (_views[i] === view) {
				if (view.show) view.show();
			} else {
				if (_views[i].hide) _views[i].hide();
			}

		}

	};
	var _hideAllBut = function(view) {
		for (var i in _views) {
			if (_views[i] === view) {
				if (view.hide) view.hide();
			} else {
				if (_views[i].show) _views[i].show();
			}

		}
	};

	var opr = {
		tlv: _views.tlv,
		bv: _views.bv,
		tv: _views.tv,
		ntv: _views.ntv,
		nv: _views.nv,

		showAllBut: _showAllBut,
		hideAllBut: _hideAllBut

	};


	//Set parameters
	_views.ntv.onclick_addButton(init.ntv_onclickAddButton);
	_views.tlv.onclick_listItem(init.tlv_onclickListItem);
	_views.nv.setViewManager(opr);
	_views.ntv.setAlerter(new pbAlerts(init.ntv_alerter));

	return opr;


};