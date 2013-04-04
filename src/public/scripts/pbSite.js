/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/
var bc = new pbBalanceCalculator();
var tc = new pbTransferCalculator();

var newTransaction = function(pbTransaction) {
	tlv.add(pbTransaction);
	bc.addTransaction(pbTransaction);
	var balances = bc.listBalances("home");
	bv.reload(balances);
};

var selectTransaction = function(transaction) {
	ntv.load(transaction);
};



//Initialize newTransactionView
var ntv = new newTransactionView();
ntv.onclick_addButton(newTransaction);

//Initialize transactionListView
var tlv = new transactionListView();
tlv.onclick_listItem(selectTransaction);

//Initialize balanceView 
var bv = new balanceView();