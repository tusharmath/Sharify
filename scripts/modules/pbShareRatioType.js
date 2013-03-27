var pbShareRatioType = function(amount) {
	var _amount = amount;
	var _userShareRatioList = [];
	
	return {
		listShares: function() {

			var totalShare = 0;
			var result = [];
			_userShareRatioList.forEach(function(p) {
				totalShare += p.share;
			});

			_userShareRatioList.forEach(function(p) {

				var k = {
					user: p.user,
					amount: _amount * p.share / totalShare
				};

				result.push(k);
			});


			return result;
		},
		addShare: function(user, share) {
			_userShareRatioList.push({
				user: user,
				share: share
			});
			return _userShareRatioList;
		},
		getAmount: function() {
			return _amount;
		}
	};
};