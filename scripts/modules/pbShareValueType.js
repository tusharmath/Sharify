var pbShareValueType = function(user, amount) {
	var _userShareRatioList = [];
	var self = this;
	return {
		listShare: function() {
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