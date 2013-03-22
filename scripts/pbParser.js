var pbParser = function(element) {
	var keys = {
		PAID: "paid",
		FOR: "for",
		TO: "to",
		AND: "and"


	};


	var tokenSplit = function(string, key) {
		var tokens = string.split(key);
		if (tokens.length <= 2) {
			return {
				left: tokens[0],
				right: tokens[1]
			};
		} else {
			throw "keywords have been used for names!";
		}

	};



	var _parser = function(text) {
		var paidSplit = tokenSplit(text, keys.PAID);
		var paidBy = paidSplit.left;

		var forSplit = tokenSplit(paidSplit.right, keys.FOR);
		var amount = forSplit.left;
		var atSplit = tokenSplit(forSplit.right, "#");

		var paidFor = atSplit.left.split(" ");

		var remarks = atSplit.right;
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
			text = text.match(/[a-z|\ *|0-9*]|\#/g).join("").replace(/\ \ */g, " ");
			return _parser(text);
		}
	};

};

var pbSuggest = function() {};