var pb = new pebbles();
var pr = new pbParser();
var ntv = new newTransactionView($(".commandBox")[0], pr, function(a) {
	console.log(a);
});
var calc = new pbTransferCalculator();