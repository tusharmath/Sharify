var pb = new pebbles();

var newTransaction = function(trn) {
	tlv.add(trn);
};

var ntv = new newTransactionView(newTransaction);


var tlv = new transactionListView();


var calc = new pbTransferCalculator();