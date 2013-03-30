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
					from: payee.user,
					to: payer.user
				});
			}
		}
		return _duplexes;

	};

	var transfers = function() {
		_transfers = [];
		var _add = function(from, to, amount) {
			_transfers.push({
				from: from,
				to: to,
				amount: amount
			});



		};

		var _list = function() {
			return _transfers;
		};

		return {
			add: _add,
			list: _list
		};
	};
	//TODO:Think of a suitable name for this function
	var _transferBuilder = function(perm, balanceKeys) {
		var from = 0;
		var to = 0;
		var bKeys = {};
		for (var i in balanceKeys) {
			bKeys[i] = balanceKeys[i];
		}

		var t = new transfers();
		//FROM: -ve & TO: +ve
		do {

			if (bKeys[perm[from].from] === 0) {
				from++;
			} else if (bKeys[perm[to].to] === 0) {
				to++;
			} else if (bKeys[perm[from].from] + bKeys[perm[to].to] === 0) {
				t.add(perm[from].from, perm[to].to, bKeys[perm[to].to]);

				bKeys[perm[from].from] = 0;
				bKeys[perm[to].to] = 0;

				from++;
				to++;

			} else if (bKeys[perm[from].from] + bKeys[perm[to].to] > 0) {
				t.add(perm[from].from, perm[to].to, -bKeys[perm[from].from]);

				bKeys[perm[to].to] += bKeys[perm[from].from];
				bKeys[perm[from].from] = 0;


				from++;

			} else if (bKeys[perm[from].from] + bKeys[perm[to].to] < 0) {
				t.add(perm[from].from, perm[to].to, bKeys[perm[to].to]);

				bKeys[perm[from].from] += bKeys[perm[to].to];
				bKeys[perm[to].to] = 0;


				to++;

			}



		}
		while (from != perm.length && to != perm.length);

		return t.list();

	};



	var _getTransfers = function(balances) {
		var perms = _getPermutations(balances);
		var bKeys = [];
		balances.forEach(function(p) {
			bKeys[p.user] = p.amount;
		});
		var bal = 0;
		var i = 0;
		var minTransfer = perms[0].length;
		var bestTransfers;

		do {
			var p = perms[i];
			var a = _transferBuilder(p, bKeys);
			if (a.length <= minTransfer) {


				if (a.length < minTransfer) {
					minTransfer = a.length;
					bestTransfers = a;
				}


			}
		} while (++i != perms.length);

		return bestTransfers;
	};

	return {
		solve: _getTransfers
	};

};

var calc = new transferCalculator();

this.addEventListener('message', function(e) {

	var x = calc.solve(e.data);

	this.postMessage(x);
}, false);