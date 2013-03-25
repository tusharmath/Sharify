var pbParser = function(element) {


	var keys = pbParser.keys;
	var tokenSplit = function(string, key) {
		var tokens = string.split(key);
		if (tokens.length <= 2) {
			return {
				left: tokens[0],
				right: tokens[1]
			};
		} else {
			throw "In corect usage of keywords!";
		}

	};

	var _clean = function(item) {

		var cleanRegex = /[a-z|0-9]*/g;
		if (item !== undefined) {
			if (item instanceof Array) {
				var s = [];
				j = 0;
				for (var i = 0; i < item.length; i++) {
					if (item === undefined) j++;
					else s[j++] = item[i].match(cleanRegex).join("");
				}
				return s;

			} else if (typeof item === "string") {
				var r = item.match(cleanRegex).join("");
				if (isNaN(r)) return r;
				return Number(r);
			}
		}



		return undefined;
	};



	var _parser = function(text) {
		var paidSplit = tokenSplit(text, keys.PAID);
		var paidBy = _clean(paidSplit.left);

		var forSplit = tokenSplit(paidSplit.right, keys.FOR);
		var amount = _clean(forSplit.left);
		var atSplit = tokenSplit(forSplit.right, "#");

		var paidFor = _clean(atSplit.left.split(","));

		var remarks = _clean(atSplit.right);
		var pbt = new pbTransaction(amount, paidBy, paidFor, remarks);

		pbt.toString = function() {

			var str = [this.paidBy, keys.PAID, this.amount, keys.FOR];
			var remarksStr = this.remarks === undefined ? "" : " #" + this.remarks;
			return str.join(" ") + " " + this.paidFor.join(", ") + remarksStr;
		};
		return pbt;

	};
	//Should return a transaction type object
	return {

		parse: function() {
			var text = element.val().toLowerCase();
			//text = text.match(/[a-z|\ *|0-9*]|[\#\,]/g).join("").replace(/\ \ */g, " ");
			return _parser(text);
		}
	};

};

pbParser.keys = {
	PAID: "paid",
	FOR: "for",
	BY: "by",
	AND: "and"


};