/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/

var newTransaction = function(pbTransaction) {
	tlv.add(pbTransaction);
};

var selectTransaction = function(transaction) {
	ntv.load(transaction);
};

var ntv = new newTransactionView();
ntv.onclick_addButton(newTransaction);


var tlv = new transactionListView();
tlv.onclick_listItem(selectTransaction);