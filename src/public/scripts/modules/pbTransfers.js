var pbTransfers = function(transfersOld) {

	var _transfers = transfersOld.slice(0, transfersOld.length);

	var transfer = function(from, to, amount) {

		return {
			from: from,
			to: to,
			amount: amount
		};
	};
	//FROM: -ve TO: +ve
	var _add = function(from, to) {
		var t;
		if (from.amount + to.amount === 0) {
			t = new transfer(from.user, to.user, from.amount);


			from.amount = 0;
			to.amount = 0;

		} else if (from.amount + to.amount > 0) {

			t = new transfer(from.user, to.user, -from.amount);


			to.amount += from.amount;
			from.amount = 0;



		} else {

			t = new transfer(from.user, to.user, to.amount);


			from.amount += to.amount;
			to.amount = 0;


		}
		_transfers.push(t);

		return {
			from: from,
			to: to
		};

	};


	var _list = function() {
		return _transfers;
	};
	return {
		add: _add,
		list: _list
	};

};