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

	var _removeTransaction = function(transaction) {
		transactions = transactions.filter(function(p) {
			return p != transaction;
		});
	};

	var updateBalance = function() {
		var getAmountValue = function(user, amount) {
			return balances[user] === undefined ? amount : balances[user] + amount;
		};

		for (var i = transactions.length - 1; i >= 0; i--) {
			var t = transactions[i];

			var userCount = t.paidFor.length;
			var amountPerPerson = t.amount / userCount;
			balances[t.paidBy] = getAmountValue(t.paidBy, t.amount);
			for (var j = 0; j < t.paidFor.length; j++) {
				var paidFor = t.paidFor[j];

				balances[paidFor] = getAmountValue(paidFor, -amountPerPerson);
			}

		}



	};

	var _listBalances = function(tag) {

		var r = [];
		var balances = [];
		for (var i = transactions.length - 1; i >= 0; i--) {
			var t = transactions[i];
			updateBalance(t, balances);
		}

		for (var i in balances) {
			var b = new pbBalance(i, balances[i]);
			r.push(b);
		}
		return r;

	};

	var _isValidBalance = function() {
		var sum;
		for (var i in balances) {
			sum += balances[i];
		}

		return sum > -1 && sum < 1 ? true : false;
	};


	var _listTransfers = function() {};

	var _addBalance = function() {};

	var _removeBalance = function() {};
	return {

		addTransaction: _addTransaction,
		removeTransaction: _removeTransaction,
		listTransactions: _listTransactions,



		listBalances: _listBalances,
		addBalance: _addBalance,
		removeBalance: _removeBalance,

		isValidBalance: _isValidBalance,

		listTransfers: _listTransfers
	};


};