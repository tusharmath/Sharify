var pb = new pebbles();

var ntv = new newTransactionView($(".commandBox")[0], function(a) {
	console.log(a);
});
var calc = new pbTransferCalculator();