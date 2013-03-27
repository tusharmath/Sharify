var pebbles = function() {

	var transactions = [];
	//var balances = [];

	var _addTransaction = function(pbt) {

		transactions.push(pbt);
		//updateBalance(pbt);
	};

	var _listTransactions = function() {
		return transactions;
	};

	var _removeTransaction = function(index) {
		throw new NotImplementedException();
	};

	var updateBalance = function(payShares, balances) {
		var getAmountValue = function(payShare) {
			return balances[payShare.user] === undefined ? payShare.amount : balances[payShare.user] + payShare.amount;
		};
		for (i = 0; i < payShares.listShares().length; i++) {
			var payShare = payShares[i];
			balances[payShare.user] = getAmountValue(payShare);
		}

	};

	var _listBalances = function(tag) {

		var _balances = [];

		//Get list of transactions for a particular tag
		var ftrans = transactions.filter(function(p) {
			return p.tag == tag;
		});


		for (var i = 0; i < ftrans.length; i++) {
			var ftran = ftrans[i];
			updateBalance(ftrans.payShareBy, _balances);
			updateBalance(ftrans.payShareFor, _balances);
		}

		return _balances;
	};

	var _isValidBalance = function(tag) {
		var sum = 0;
		listBalances(tag).foreach(function(k) {
			sum += k;
		});

		return sum > -1 && sum < 1 ? true : false;


	};


	var _listTransfers = function() {};

	return {

		addTransaction: _addTransaction,
		removeTransaction: _removeTransaction,
		listTransactions: _listTransactions,



		listBalances: _listBalances,

		isValidBalance: _isValidBalance,

		listTransfers: _listTransfers
	};


};