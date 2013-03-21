var pebbles = function() {

	var transactions = [];

	var _addTransaction = function(pbt) {

		transactions.push(pbt);
	};

	var _listTransactions = function() {
		return transactions;
	};

	var _removeTransaction = function(transaction) {
		transactions = transactions.filter(function(p) {
			return p != transaction;
		});
	};

	var updateBalance = function(t, balance) {


		var getAmountValue = function(user, amount) {
			return balance[user] === undefined ? t.amount : balance[user] + amount;
		};

		var userCount = t.paidFor.length;
		var amountPerPerson = t.amount / userCount;
		balance[t.paidBy] = getAmountValue(t.paidBy, t.amount);
		for (var j = 0; j < t.paidFor.length; j++) {
			var paidFor = t.paidFor[j];

			balance[paidFor] = getAmountValue(paidFor, -amountPerPerson);
		}



	};

	var _listBalances = function() {
		var balances = [];
		for (var i = transactions.length - 1; i >= 0; i--) {
			var t = transactions[i];
			updateBalance(t, balances);
		}
		return balances;

	};

	return {
		transactions: {
			add: _addTransaction,
			remove: _removeTransaction,
			list: _listTransactions
		},
		balances: {
			list: _listBalances
		}
	};
};