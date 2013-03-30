var pbWorker = function(worker) {



	var _worker = new Worker(worker);
	var _callBack;

	var _intCallback = function(e) {
		if (_callBack === undefined) {
			throw new CallbackNotDefinedException();
		}
		_callBack(e.data);

	};
	_worker.addEventListener('message', _intCallback, false);



	var _execute = function(data, callback) {
		_callBack = callback;
		_worker.postMessage(data);
	};

	return {
		execute: _execute
	};

};

pbWorker.Workers = {
	TRANSFER_CALCULATOR: "scripts/workers/transferCalculator.js"
};