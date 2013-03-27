var pbShareRatioType = function() {
	var _amount;
	var _userShareRatioList = [];
	var self = this;
	return {
		listShare: function() {
			return _userShareRatioList;
		},
		addShare: function(user, share) {
			self.push({
				user: user,
				share: share
			});
			return self._userShareRatioList;
		},
		setAmount: function(amount) {
			self._amount = amount;
		},
		getAmount: function() {
			return self._amount;
		}
	};
};