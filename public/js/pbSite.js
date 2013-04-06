/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/
var bc = new pbBalanceCalculator();
var tc = new pbTransferCalculator();

var newTransaction = function(pbTransaction) {
	try {


		vm.tlv.add(pbTransaction);

		bc.addTransaction(pbTransaction);
		var balances = vbc.listBalances("home");

		vm.bv.reload(balances);

		tc.updateBalances(balances);

		var transfers = tc.listTransfers();

		vm.tv.reload(transfers);

	} catch (e) {
		newTransactionAlert.show(e);
	}
};

var selectTransaction = function(transaction) {
	vm.ntv.load(transaction);
};


//View Manager
var vm = new pbViewManager();
vm.ntv.onclick_addButton(newTransaction);
vm.tlv.onclick_listItem(selectTransaction);