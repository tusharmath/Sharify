var pbViewManager = function() {
	var _tlv = new transactionListView();
	var _bv = new balanceView();
	var _tv = new transfersView();
	var _ntv = new newTransactionView();



	return {
		tlv: _tlv,
		bv: _bv,
		tv: _tv,
		ntv: _ntv,
		showAllBut: _show,
		hideAllBut: _hide

	};

};