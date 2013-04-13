var pbBalanceCalculator = function() {

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
		throw NotImplementedException();
	};

	var updateBalance = function(payShares, balances) {
		var getAmountValue = function(payShare) {
			return balances[payShare.user] === undefined ? payShare.amount : balances[payShare.user] + payShare.amount;
		};
		for (i = 0; i < payShares.length; i++) {
			var payShare = payShares[i];
			balances[payShare.user] = getAmountValue(payShare);
		}

	};

	var _groupTransactionsByTag = function(transactions) {
		var tGroup = {};
		transactions.forEach(function(t) {
			if (tGroup[t.tag] === undefined) {
				tGroup[t.tag] = [];
			}
			tGroup[t.tag].push(t);
		});

		return tGroup;
	};

	var _getAllBalances = function() {
		var gTrans = _groupTransactionsByTag(transactions);
		var balances = [];
		for (var j in gTrans) {
			var b = _getBalances(gTrans[j]);
			balances.push(b);
		}
		return balances;

	};

	var _getBalances = function(ftrans) {

		var _balances = [];

		//Get list of transactions for a particular tag


		for (var i = 0; i < ftrans.length; i++) {
			var ftran = ftrans[i];
			updateBalance(ftran.payers, _balances);
			updateBalance(ftran.payees, _balances);
		}


		var userAmount = [];
		for (var j in _balances) {
			userAmount.push({
				user: j,
				amount: _balances[j]
			});
		}

		return {
			tag: ftrans[0].tag,
			items: userAmount
		};
	};

	var _isValidBalance = function(tag) {
		var sum = 0;
		listBalances(tag).foreach(function(k) {
			sum += k.amount;
		});

		return sum > -1 && sum < 1 ? true : false;


	};
	/*
	var _listTransfers = function(tag) {

		var balances = _getBalances(tag);
		var calc = new pbTransferCalculator(balances);
		return calc.solve();

	};
*/
	var _clearTransactions = function() {
		//TODO: add code
		throw NotImplementedException();

	};

	return {

		addTransaction: _addTransaction,
		//removeTransaction: _removeTransaction,
		clearTransactions: _clearTransactions,
		//listTransactions: _listTransactions,



		listBalances: _getAllBalances,

		isValidBalance: _isValidBalance


	};


};