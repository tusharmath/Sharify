var pbShareValueType = function() {
	var _userShareRatioList = [];

	return {
		listShares: function() {
			return _userShareRatioList;
		},
		addShare: function(user, amount) {
			userShareRatioList.push({
				user: user,
				amount: amount
			});
			return _userShareRatioList;
		}
	};
};