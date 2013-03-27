var pbShareValueType = function() {
	var _userShareRatioList = [];
	var self = this;
	return {
		listShares: function() {
			return _userShareRatioList;
		},
		addShare: function(user, amount) {
			self.push({
				user: user,
				amount: amount
			});
			return self._userShareRatioList;
		}
	};
};