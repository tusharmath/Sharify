var pbTransaction = function(amount, paidBy, paidFor, remarks) {

	var clean = function(item) {
		if (item !== undefined) {
			if (item instanceof Array) {
				var s = [];
				j = 0;
				for (var i = 0; i < item.length; i++) {
					if (item === undefined) j++;
					else s[j++] = item[i].replace(/\ */g, "");
				}
				return s;

			} else if (typeof item === "string") {
				var r = item.replace(/\ */g, "");
				if (isNaN(r)) return r;
				return Number(r);
			}
		}



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
	pbt.paidFor = clean(paidFor);
	pbt.remarks = clean(remarks);


	return pbt;

};