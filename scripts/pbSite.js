//var formatter = new pbFormat(element);
//var command = new inputView();
//ko.applyBindings(inputView, $(".commandBox")[0]);
var item = new commandView($(".commandBox")[0]);
var parser = new pbParser();
parser.parse(item.data());



//var parser = new pbParser(data);
//pb = new pebbles();