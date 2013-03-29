var transferCalculator = function(balances) {



};

var _getDuplexes = function(balances) {
	var _duplexes = [];
	var payers = balances.filter(function(p) {
		return p.amount > 0;
	});
	var payees = balances.filter(function(p) {
		return p.amount < 0;
	});

};



//var sBal = _sortBalances(balances);
/*
1. Get all duplexes where one is pos and one is neg.
2. Iterate over all permutations  of the duplex combinations.

		*/