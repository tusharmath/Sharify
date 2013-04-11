var pbCombinationBuilder = function(list, length) {

	if (list instanceof Array === false) {
		var tlist = [];
		for (var i in list) {
			tlist.push(i);
		}
		list = tlist;
	}

	var _binArray = [];


	list.forEach(function(a) {
		_binArray.push(0);
	});

	var _incval = function(list, index) {
		if (index == list.length) {
			return list;
		}

		if (list[index] === 0) {
			list[index]++;
			return list;
		} else {
			list[index] = 0;
			return _incval(list, index + 1);
		}
	};

	var _sum = function() {
		var sum = 0;
		_binArray.forEach(function(p) {
			sum += p;
		});
		return sum;
	};



	var _list = function() {
		var _comb = [];

		do {

			var _temp = [];
			for (var i = _binArray.length - 1; i >= 0; i--) {
				if (_binArray[i] == 1) {
					_temp.push(list[i]);
				}
			}

			if (_temp.length == length) {
				_comb.push(_temp);
			}
			_incval(_binArray, 0);

		} while (_sum() !== 0);

		return _comb;

	};


	return {
		list: _list

	};
};