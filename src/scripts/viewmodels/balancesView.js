var balanceView = function(anc) {

	var maxcols = 3;
	var _element = $("#balanceView")[0];


	var model = {
		rows: ko.observableArray(),
		isVisible: ko.observable(false)
	};

	var _reload = function(balances) {
		//balances = balances.items;
		var rows = [];
		var cols = [];

		for (var i = 0; i < balances.length; i++) {
			var bal = balances[i];
			cols.push(bal);
			if (cols.length % maxcols === 0) {
				rows.push(cols.splice(0));
				cols.length = 0;
			}
		}
		if (cols.length > 0) rows.push(cols);

		model.rows.removeAll();
		rows.forEach(function(p) {
			model.rows.push(p);
		});
	};

	var _hide = function() {
		model.isVisible(false);
	};

	var _show = function() {
		model.isVisible(true);
	};

	ko.applyBindings(model, _element);

	return {
		reload: _reload,
		hide: _hide,
		show: _show
	};
};