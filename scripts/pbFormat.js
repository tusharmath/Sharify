var pbFormat = function(element) {

	var _rules = {};
	_rules.clearExtraSpaces = function(text, keyCode) {
		return text
		.replace(/\ \ */g, " ");


	};

	var _formatter = function(e) {
		var keyCode = e.charCode;
		var text = e.target.value;
		for (var i in _rules) {
			text = _rules[i](text, keyCode);
		}
		e.target.value = text;
	};

	element.bind("keypress", _formatter);


};