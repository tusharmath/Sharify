var pbParser = function() {

	var shareType = {
		RATIO: 0,
		VALUE: 1
	};


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

		var cleanRegex = /[a-z|0-9\*\=]*/g;
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
			} else if (typeof item === "number") {
				return item;
			}
		}



		return undefined;
	};

	var _userShareTokenSplit = function(token, type) {

		var _pair = function(left, right) {
			return {
				left: left,
				right: right
			};
		};
		var m = token.split(/[\*|\=]/g);

		if (m.length == 1) {
			if (type == shareType.RATIO) {
				return new _pair(token, 1);
			} else {
				throw UserShareNotValid();
			}
		} else {

			return _pair(m[0], Number(m[1]));
		}

	};

	var _getShareType = function(str) {
		var matchStar = str.match(/\*/g) === null ? false : true;
		var matchEqual = str.match(/\=/g) === null ? false : true;
		if (!matchStar && !matchEqual) {
			return shareType.RATIO;
		} else if (matchStar && matchEqual) {
			throw UserShareNotValid();
		} else if (matchStar) {
			return shareType.RATIO;
		} else if (matchEqual) {
			return shareType.VALUE;
		}
		throw UserShareNotValid();
	};

	var _createUserShare = function(str, amount) {

		var tokens = str.split(",");
		var cleanedTokens = _clean(tokens);
		var userShares;
		var negate = amount >= 0 ? 1 : -1;


		var type = _getShareType(str);

		if (type == shareType.VALUE) {
			userShares = new pbShareValueType();
			amount = 0;


		} else {
			userShares = new pbShareRatioType(amount);



		}


		for (var i = cleanedTokens.length - 1; i >= 0; i--) {
			var token = cleanedTokens[i];
			var userShare = _userShareTokenSplit(token, type);
			if (type == shareType.VALUE) {
				amount += userShare.right * negate;
			}
			userShares.addShare(userShare.left, userShare.right * negate);

		}
		return {
			users: userShares.listShares(),
			amount: amount
		};

	};

	var _parser = function(data) {
		var amount = _clean(data.amount);
		var payerShares = _createUserShare(data.payers.toLowerCase(), amount);
		if (amount != payerShares.amount) {
			throw InvalidBalancesException();
		}

		var payeeShares = _createUserShare(data.payees.toLowerCase(), -payerShares.amount);

		if (payerShares.amount + payeeShares.amount !== 0) {
			throw InvalidBalancesException();
		}

		var payers = payerShares.users;
		var payees = payeeShares.users;

		var tag = _clean(data.tag);

		var remarks = data.remarks;
		var pbt = new pbTransaction(payers, payees, remarks, tag);
		return pbt;

	};
	//Should return a transaction type object
	return {

		parse: function(data) {


			return _parser(data);
		}
	};

};

pbParser.keys = {
	PAID: "paid",
	FOR: "for",
	BY: "by",
	AND: "and",
	MULTIPLY: "*",
	EQUAL: "="


};