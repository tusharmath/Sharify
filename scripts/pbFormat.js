var pbFormat = function(element){

	var _rules = {};
	
	_rules.clearExtraSpaces = function(text, keyCode){
		return text.replace(/\ *, */g,", ").replace(/\ \ */g," ");
	};

	var _formatter= function(e){
		var keyCode = e.charCode;
		var text = e.srcElement.value;
		for (var i in _rules) {
			text = _rules[i](text, keyCode);
		}
	};

	element.addEventListener("keypress" , _formatter);


};