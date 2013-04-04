var pbTransaction = function(payers, payees, remarks, tag) {

	var pbt = {};

	pbt.amount = 0;

	payers.forEach(function(u) {
		pbt.amount += u.amount;
	});

	pbt.payers = payers;
	pbt.payees = payees;
	pbt.remarks = remarks;

	pbt.tag = tag;



	var _convertSharesToString = function() {
		items = this;
		var _items = [];
		for (var i = items.length - 1; i >= 0; i--) {
			var item = items[i];
			_items.push(item.user + " = " + item.amount);

		}
		return _items.join(", ");
	};
	pbt.payers.toString = _convertSharesToString;
	pbt.payees.toString = _convertSharesToString;


	return pbt;

};