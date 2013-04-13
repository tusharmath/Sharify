/*
var pb = new pebbles();
var calc = new pbTransferCalculator();
*/
var bc = new pbBalanceCalculator();
var tc = new pbTransferCalculator();
var anc = new pbAnchors();

var newTransaction = function(pbTransaction) {

	vm.tlv.add(pbTransaction);

	bc.addTransaction(pbTransaction);
	var balances = bc.listBalances("home");

	vm.bv.reload(balances);

	tc.updateBalances(balances);

	//var transfers = tc.listTransfers();

	//vm.tv.reload(transfers);


};

var selectTransaction = function(transaction) {
	vm.ntv.load(transaction);
};


//View Manager
var settings = {
	ntv_onclickAddButton: newTransaction,
	tlv_onclickListItem: selectTransaction,
	ntv_alerter: ".commandBox .alert"
};
var vm = new pbViewManager(settings);