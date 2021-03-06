var pbTransferCalculator = function() {
	var _finalTransfers = [];
	var _balances;


	var minTransferCount = 0;



	var _addTransfer = function(payees, payers) {


		var _transfers = new pbTransfers();
		var i = 0,
			j = 0;
		var from, to;

		var _payees = $.extend(true, [], payees);
		var _payers = $.extend(true, [], payers);

		do {

			from = _payees[i];
			to = _payers[j];

			if (_transfers.list().length >= minTransferCount) {
				return;
			} else {
				_transfers.add(from, to);
			}

			if (from.amount === 0) {
				i++;
			}

			if (to.amount === 0) {
				j++;
			}

		} while (i != _payees.length);

		var items = _transfers.list();
		if (items.length < minTransferCount || _finalTransfers.length === 0 && items.length == minTransferCount) {
			minTransferCount = items.length;
			_finalTransfers = items;
		}

	};

	var _listTransfers = function() {

		var bKey = _dichotomizer(_balances);
		minTransferCount = bKey.payees.length + bKey.payers.length - 1;
		_finalTransfers.length = 0;
		var payees = new pbArray(bKey.payees);

		do {

			var payers = new pbArray(bKey.payers);
			do {

				_addTransfer(payees, payers);
				payers = payers.rotateLeft();

			} while (payers !== null);

			payees = payees.rotateLeft();

		} while (payees !== null);
		return _finalTransfers;
	};



	var _factorial = function(i) {
		var fact = i;
		while (i !== 1) {
			fact *= --i;
		}
		return fact;
	};

	var _dichotomizer = function(balances) {

		var payees = [],
			payers = [];



		balances.forEach(function(b) {
			if (b.amount > 0) {
				payers.push(b);
			} else if (b.amount < 0) {
				payees.push(b);
			}
		});

		return {
			payers: payers,
			payees: payees
		};
	};

	var _updateBalances = function(balances) {
		_balances = balances;
	};

	return {
		updateBalances: _updateBalances,
		listTransfers: _listTransfers

	};
};