var pbCombinationBuilder = function(list, length) {

	var _list = list;
	var _index = 0;
	var _binArray = [];


	_list.forEach(function(a) {
		_binArray.push(0);
	});

	var _incval = function(list, index) {
		if (index == list.length) {
			return;
		}

		if (list[index] === 0) {
			list[index]++;
			return list;
		} else {
			list[index] = 0;
			return _incval(list, index);
		}
	};

	var _sum = function() {
		var sum = 0;
		_binArray.forEach(function(p) {
			sum += p;
		});
		return sum;
	};



	var _next = function() {

		var _comb = [];
		for (var i = _binArray.length - 1; i >= 0; i--) {
			if (_binArray[i] == 1) {
				_comb.push(list[i]);
			}

		}

		if (_index == _binArray.length) return null;
		else {
			_incval(_binArray, 0);
			return _comb;
		}

	};


	return {
		next: _next

	};
};