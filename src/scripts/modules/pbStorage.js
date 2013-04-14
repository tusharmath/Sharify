var pbStorage = function() {

	var ls = window.localStorage;
	var savedData = 'savedData';
	var _data = ls.getItem(savedData) === null ? {} : ls.getItem(savedData);


	var _set = function(key, data) {

		_data[key] = data;

		var jsonData = JSON.stringify(_data);

		ls.setItem(savedData, jsonData);
	};

	var _get = function(key) {
		return _data[key];
	};
	return {
		set: _set,
		get: _get
	};
};

pbStorage.keys = {
	TRANSACTIONS: 0
};