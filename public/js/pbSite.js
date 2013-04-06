/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/
var bc = new pbBalanceCalculator();
var tc = new pbTransferCalculator();

var newTransaction = function(pbTransaction) {
	try {


		tlv.add(pbTransaction);

		bc.addTransaction(pbTransaction);
		var balances = bc.listBalances("home");
		bv.reload(balances);

		tc.updateBalances(balances);
		var transfers = tc.listTransfers();
		tv.reload(transfers);

	} catch (e) {
		newTransactionAlert.show(e);
	};
};

var selectTransaction = function(transaction) {
	ntv.load(transaction);
};


var newTransactionAlert = new pbAlerts($("#create .alert"));
//Initialize newTransactionView
var ntv = new newTransactionView(newTransactionAlert);
ntv.onclick_addButton(newTransaction);

//Initialize transactionListView
var tlv = new transactionListView();
tlv.onclick_listItem(selectTransaction);

//Initialize balanceView 
var bv = new balanceView();

//Initialize transfersView
var tv = new transfersView();

