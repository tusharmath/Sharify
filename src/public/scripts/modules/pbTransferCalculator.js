var transferCalculator = function() {

	_transfersList = [];


	var _getCombs = function(payee, length, payers) {
		var combs = new pbCombinationBuilder(payers, length);
		return combs.filter(function(p) {
			var sum = 0;

			p.forEach(function(q) {
				sum += q.amount;
			});

			return sum == payee.amount;
		});
	};

	var _calc = function(transfers, payees, payers, length, bKeys) {
		for (var i = payees.length - 1; i >= 0; i--) {
			var payee = payees[i];
			var combinations = _getCombs(payee, length, payers);

			for (var j = combinations.length - 1; j >= 0; j--) {
				var c = combinations[j];

			};
		}

	};

	return {
		solve: _solve

	};
};