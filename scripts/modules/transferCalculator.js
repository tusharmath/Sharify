var transferCalculator = function(balances) {

	var _getDuplexes = function(balances) {
		var _duplexes = [];

		var payers = balances.filter(function(p) {
			return p.amount > 0;
		});

		var payees = balances.filter(function(p) {
			return p.amount < 0;
		});

		for (var i = payers.length - 1; i >= 0; i--) {
			var payer = payers[i];
			for (var j = payees.length - 1; j >= 0; j--) {
				var payee = payees[j];
				_duplexes.push({
					from: payee,
					to: payer
				});
			}
		}
		return _duplexes;

	};

	return {

		getDuplexes: _getDuplexes
	};

};



//var sBal = _sortBalances(balances);
/*
1. Get all duplexes where one is pos and one is neg.
2. Iterate over all permutations  of the duplex combinations.

		*/