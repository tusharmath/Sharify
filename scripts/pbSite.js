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
setTimeout(function(argument) {

	var calc = new transferCalculator();
	var x = calc.getPermutations(balances);
	console.log(x.length);
}, 500);
//var transfers  = pb.listTransfers("home");

//var parser = new pbParser(data);
//pb = new pebbles();