var pbParser = function(element) {

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
		//var defaultShare = type == shareType.RATIO ? 1 :
		if (m.length == 1) {
			if (type == shareType.RATIO) {
				return new _pair(token, 1);
			} else {
				throw new UserShareNotValid();
			}
		} else {

			return new _pair(m[0], m[1]);
		}

	};

	var _getShareType = function(str) {
		var matches = str.match(/\*|\=/g);
		if (matches === null) {
			return shareType.RATIO;
		} else if (matches.length > 1) {
			throw new UserShareNotValid();
		} else if (str.match(/\*/g).length >= 1) {
			return shareType.RATIO;
		} else if (str.match(/\=/g).length >= 1) {
			return shareType.VALUE;
		}
		return shareType.RATIO;
	};

	var _createUserShare = function(str, amount) {

		var tokens = str.split(",");
		var cleanedTokens = _clean(tokens);
		var userShares;


		var type = _getShareType(str);

		if (type == shareType.VALUE) {
			userShares = new pbShareValueType();
			amount = 0;
		} else {
			userShares = new pbShareRatioType(amount);



			for (var i = cleanedTokens.length - 1; i >= 0; i--) {
				var token = cleanedTokens[i];
				var userShare = _userShareTokenSplit(token, type);
				amount += userShare.right;
				userShares.addShare(userShare.left, userShare.right);

			}
		}
		return userShares.listShares();

	};

	var _parser = function(data) {

		var payers = _createUserShare(data.payers, data.amount);
		var payees = _createUserShare(data.payees, -data.amount);
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