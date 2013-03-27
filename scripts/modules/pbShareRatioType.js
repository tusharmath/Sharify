var pbShareRatioType = function() {
	var _amount;
	var _userShareRatioList = [];
	var self = this;
	return {
		listShares: function() {

			var totalShare = 0;
			var result = [];
			_userShareRatioList.foreach(function(p) {
				totalShare += p.share;
			});

			_userShareRatioList.foreach(function(p) {

				var k = {
					user: p.user,
					amount: p.baseAmount * p.share / totalShare
				};

				result.push(k);
			});


			return result;
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