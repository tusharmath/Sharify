var pbStorage = function() {

	var ls = window.localStorage;
	var savedData = 'savedData';

	var _getData = function() {
		var _data = ls.getItem(savedData) === null ? {} : ls.getItem(savedData);
	};



	var _add = function(key, data) {

		if (_data[key].length === 0) {
			_data[key] = [];
		}
		_data[key].push(data);

		var jsonData = JSON.stringify(_data);

		ls.setItem(savedData, jsonData);
	};

	var _remove = function(key, index) {

		_data[key] = _data.splice(index);

		var jsonData = JSON.stringify(_data);

		ls.setItem(savedData, jsonData);
	};

	var _get = function() {
		return _data;
	};
	return {
		add: _add,
		remove: _remove,
		get: _get
	};
};

pbStorage.keys = {
	TRANSACTIONS: 0
};