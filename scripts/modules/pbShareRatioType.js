var pbShareRatioType = function(amount) {
	var _amount = amount;
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
		getAmount: function() {
			return self._amount;
		}
	};
};