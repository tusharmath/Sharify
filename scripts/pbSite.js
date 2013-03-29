//var formatter = new pbFormat(element);
//var command = new inputView();
//ko.applyBindings(inputView, $(".commandBox")[0]);
var item = new commandView($(".commandBox")[0]);
var parser = new pbParser();

// TEST CASE
var t = parser.parse(item.data());
var pb = new pebbles();
pb.addTransaction(t);
var balances = pb.listBalances("home");
//console.log(balances);

var worker = new Worker('scripts/modules/transferCalculator.js');

worker.addEventListener('message', function(e) {
	console.log('Worker said: ', e.data);
}, false);

worker.postMessage(balances);

//var transfers  = pb.listTransfers("home");

//var parser = new pbParser(data);
//pb = new pebbles();