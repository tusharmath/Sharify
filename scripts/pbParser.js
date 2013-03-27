var pbParser = function(element) {



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
			}
		}



		return undefined;
	};

	var _userShareTokenSplit = function(token) {

		var _pair = function(left, right, key) {
			return {
				left: left,
				right: right,
				key: key
			};
		};

		var vals = token.split(pbParser.keys.MULTIPLY);

		if (vals.length == 1) {
			vals = token.split(pbParser.keys.EQUAL);
			if (vals.length == 1) {
				return vals[0];
			} else {
				return new _pair(vals[0], vals[1], pbParser.keys.EQUAL);
			}
		} else {
			return new _pair(vals[0], vals[1], pbParser.keys.MULTIPLY);
		}

	};

	var _createUserShare = function(str, amount) {
		var shareType = {
			RATIO: 0,
			VALUE: 1
		};

		var tokens = str.split(",");
		var cleanedTokens = _clean(tokens);
		var type;
		var userShares;
		for (var i = cleanedTokens.length - 1; i >= 0; i--) {
			var token = cleanedTokens[i];
			var userShare = _createUserShare(token);

			if (type === undefined) {

				type = userShare.key;
				if (type == pbParser.keys.EQUAL) {
					userShares = new pbShareValueType();
				} else {
					userShares = new pbShareRatioType(amount);

				}
			} else if (userShare.key == token || userShare.key === null) {
				userShare.addShare(userShare.left, userShare.right);

			} else {
				throw new UserShareNotValid();
			}
		}

	};

	var _parser = function(data) {

		var payers = _createUserShare(data.payers, data.amount);
		var payees = _createUserShare(data.payees, data.amount);
		var tag = data.tag;

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