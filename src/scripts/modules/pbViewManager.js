var pbViewManager = function(init) {
	var _views = {};

	var anc = new pbAnchors();
	var stg = new pbStorage();
	//Create instances


	_views.tlv = new transactionListView();
	_views.bv = new balanceView();
	_views.tv = new transfersView();
	_views.ntv = new newTransactionView();
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
	_views.ntv.setStorage(stg);

	pbViewManager.registerRoutes(opr, anc);
	return opr;


};

pbViewManager.registerRoutes = function(opr, anc) {
	anc.registerRoute('transactions', 'create', function() {
		$('#createTransaction').modal();
	});
	anc.registerRoute('transactions', 'edit');
	anc.registerRoute('transactions', 'delete');
	anc.registerRoute('transactions', 'index', function() {
		opr.showAllBut(transactionListView);
	});

	anc.registerRoute('balances', 'index', function() {
		$('#balanceView').modal();
	});
	anc.registerRoute('');
	anc.registerRoute('');
	anc.registerRoute('');
};