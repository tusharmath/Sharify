var transferCalculator = function(balances) {
	var _permutations = [];

	var swap = function(z, l, j) {
		var e = z.slice(0);
		var k = e[l];
		e[l] = e[j];
		e[j] = k;
		return e;
	};

	var _permu = function(p, index) {
		_permutations.push(p);

		for (var i = index; i >= 0; i--) {
			for (var j = 0; j < i; j++) {
				var t = swap(p, j, i);

				_permu(t, i - 1);
			}
		}
	};

	var _factorial = function(i) {
		var fact = i;
		while (i !== 1) {
			fact *= --i;
		}
		return fact;
	};


	var _getPermutations = function(balances) {

		var duplexes = _getDuplexes(balances);
		_permu(duplexes, duplexes.length - 1);

		return _permutations;

	};

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
		getPermutations: _getPermutations
	};

};