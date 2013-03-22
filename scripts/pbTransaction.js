var pbTransaction = function(amount, paidBy, paidFor, remarks) {

	var clean = function(item) {
		if (item !== undefined) return item.replace(/\ */g, "");
		return undefined;
	};

	var cleanArray = function(items) {
		return items.filter(function(item) {
			return item !== "";
		});
	};

	var pbt = {};
	pbt.amount = clean(amount);
	pbt.paidBy = clean(paidBy);
	pbt.paidFor = cleanArray(paidFor);
	pbt.remarks = clean(remarks);


	return pbt;

};