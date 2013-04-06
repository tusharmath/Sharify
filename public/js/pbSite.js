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
	}
};

var selectTransaction = function(transaction) {
	ntv.load(transaction);
};


//Initialize newTransactionView
var vm = new pbViewManager();
vm.ntv.onclick_addButton(newTransaction);
vm.tlv.onclick_listItem(selectTransaction);
vm.bv = new balanceView();
vm.tv = new transfersView();

