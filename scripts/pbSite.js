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
/*
var balances = [{
	user: "a",
	amount: -10
}, {
	user: "b",
	amount: -6
}, {
	user: "c",
	amount: -5
}, {
	user: "d",
	amount: -3
}, {
	user: "e",
	amount: -1
}, {
	user: "f",
	amount: 2
}, {
	user: "g",
	amount: 4
}, {
	user: "h",
	amount: 5
}, {
	user: "i",
	amount: 7
}, {
	user: "k",
	amount: 7
}

];*/


//console.log(balances);

var calc = new pbWorker(pbWorker.Workers.TRANSFER_CALCULATOR);

calc.execute(balances, function(data) {
	console.log(data);

});


//var transfers  = pb.listTransfers("home");

//var parser = new pbParser(data);
//pb = new pebbles();