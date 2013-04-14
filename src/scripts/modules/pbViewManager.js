var pbViewManager = function(init) {
	var _views = {};

	var anc = new pbAnchors();
	//Create instances


	_views.tlv = new transactionListView(anc);
	_views.bv = new balanceView(anc);
	_views.tv = new transfersView(anc);
	_views.ntv = new newTransactionView(anc);
	//_views.nv = new navigationView(anc);
	//_views.spv = new startPageView(anc);


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
		spv: _views.spv,
		showAllBut: _showAllBut,
		hideAllBut: _hideAllBut

	};


	//Set parameters
	_views.ntv.onclick_addButton(init.ntv_onclickAddButton);
	_views.tlv.onclick_listItem(init.tlv_onclickListItem);
	//_views.nv.setViewManager(opr);
	//_views.spv.setViewManager(opr);
	_views.ntv.setAlerter(new pbAlerts(init.ntv_alerter));

	return opr;


};