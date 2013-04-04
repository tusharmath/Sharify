/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/

var newTransaction = function(trn) {
	tlv.add(trn);
};

var selectTransaction = function(trn) {
	ntv.load(trn);
};

var ntv = new newTransactionView();
ntv.onclick_addButton(newTransaction);


var tlv = new transactionListView();
tlv.onclick_listItem(selectTransaction);