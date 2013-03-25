var element = $("div.commandBox textarea");
element.focus();
element.val("Paid 5000 \nby A, B * 2, C \nfor A, B * 2, C * 2, D, E * 2, F * 2, G, I \n#Tagname : remarks");
//var formatter = new pbFormat(element);

var parser = new pbParser(element);
pb = new pebbles();