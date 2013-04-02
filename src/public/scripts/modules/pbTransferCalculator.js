var pbTransferCalculator = function() {
	var _transfersList = [];



	var _getCombs = function(amount, length, bkeys) {
		var payers = bkeys.payers;


		var combs = new pbCombinationBuilder(payers, length);
		return combs.list().filter(function(p) {
			var sum = 0;

			p.forEach(function(q) {
				sum += payers[q];
			});

			return sum == -amount;
		});
	};

	var _addTransfers = function(comb) {



	};

	var _getAmount = function(bkeys, payee, payer) {
		var payeeAmount = bkeys.payees[payee];
		var payerAmount = bkeys.payers[payer];

		var sum = payerAmount + payeeAmount;

		if (sum === 0) {
			return payerAmount;
		} else if (sum > 0) {
			return -payeeAmount;
		} else if (sum < 0) {
			return payerAmount;
		}
	};

	var _createTransfers = function(payee, payerCombination, bkeys, oldTransfers) {


		var _transfers = oldTransfers;
		var _bkeys = {};

		_bkeys = $.extend(true, {}, bkeys);



		payerCombination.forEach(function(payer) {

			var _amount = _getAmount(bkeys, payee, payer);

			_transfers.push({
				from: payee,
				to: payer,
				amount: _amount
			});

			delete _bkeys.payers[payer];
		});
		delete _bkeys.payees[payee];


		return {

			transfers: _transfers,
			bkeys: _bkeys

		};
	};

	var _bkeysIsEmpty = function(bkeys) {
		return Object.keys(bkeys.payers).length === 0 && Object.keys(bkeys.payers).length === 0;

	};



	var _calc = function(transfers, bkeys, combLength) {
		//For all the payees 

		if (_bkeysIsEmpty(bkeys) || combLength > Object.keys(bkeys.payers).length) {
			if (transfers.length > 0) {
				_transfersList.push({
					transfers: transfers,
					bkeys: bkeys
				});
			}
		} else {
			var combinationsFound = false;
			for (var payee in bkeys.payees) {

				var payerCombinations = _getCombs(bkeys.payees[payee], combLength, bkeys);



				for (var i = payerCombinations.length - 1; i >= 0; i--) {
					combinationsFound = true;
					var payerCombination = payerCombinations[i];


					var x = _createTransfers(payee, payerCombination, bkeys, transfers);
					_calc(x.transfers, x.bkeys, combLength + 1);

				}

			}

			if (combinationsFound === false) {
				_calc(transfers, bkeys, combLength + 1);
			}
		}
	};



	var _dichotomizer = function(balances) {

		var payees = {}, payers = {};


		balances.forEach(function(b) {
			if (b.amount > 0) {
				payers[b.user] = b.amount;
			} else if (b.amount < 0) {
				payees[b.user] = b.amount;
			}

		});

		return {
			payers: payers,
			payees: payees
		};
	};



	var _solve = function(balances) {
		var bkeys = _dichotomizer(balances);
		_calc([], bkeys, 1);

		//TODO:LOGGER to be removed
		var minlength = Object.keys(bkeys.payers).length * Object.keys(bkeys.payers).length;

		_transfersList.forEach(function(p) {
			console.log(p.transfers.length);

		});

		_transfersList.forEach(function(p) {
			if (p.transfers.length == minlength) console.log(p.transfers.length);



		});



	};

	return {
		solve: _solve

	};
};