var pbTransferCalculator = function() {

	_transfersList = [];



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

	var _createTransfers = function(payee, payerCombination, bkeys) {


		var _transfers = [];
		var _bkeys = {};

		_bkeys = $.extend(true, {}, bkeys);

		delete _bkeys.payees[payee];



		payerCombination.forEach(function(payer) {

			delete _bkeys.payers[payer];

			_transfers.push({
				from: payee,
				to: payer
			});
		});



		return {

			transfers: _transfers,
			bkeys: _bkeys

		};
	};



	var _calc = function(transfers, bkeys, combLength) {
		//For all the payees 
		for (var payee in bkeys.payees) {

			//Get the combinations of payers whos sum of amounts is equal to payee.
			var payerCombinations = _getCombs(bkeys.payees[payee], combLength, bkeys);

			/*
			Now - add transfers for each combination and set the balance as 0 for them.
			
			for all the combinations create a new transfer list containing the previuos transfers.

			call the calc function again with the new transfers for each transfer and for each payer and payee.
			*/

			if (payerCombinations.length > 0) {
				for (var i = payerCombinations.length - 1; i >= 0; i--) {
					var payerCombination = payerCombinations[i];
					var tnew = new pbTransfers(transfers);

					var x = _createTransfers(payee, payerCombination, bkeys);

					_calc(x.transfers, x.bkeys, combLength + 1);

				}
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

	};

	return {
		solve: _solve

	};
};