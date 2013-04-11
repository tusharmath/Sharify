var pbArray = function(arr, count) {
	var _arr = arr.slice(0);
	count = count === undefined ? 0 : count + 1;
	var _rotateLeft = function() {
		if (count == _arr.length) return null;
		var t = _arr[0];
		var a = _arr.slice(1, _arr.length);
		a.push(t);
		return new pbArray(a, count);
	};

	_arr.rotateLeft = _rotateLeft;
	return _arr;
};