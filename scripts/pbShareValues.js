var pbShareValues = function(pbShareList, amount) {

	var pbPayShareItem = function(user, amount) {
		return {
			user: user,
			amount: amount
		};
	};

	var _shareList = [];
	var _totalShare = 0;
	pbShareList.foreach(function(p) {
		_totalShare += p.share;
	});

	pbShareList.foreach(function(p) {

		var x = new pbPayShareItem(s.user, amount * s.share / _totalShare);
		_shareList.push(x);
	});



	return _shareList;

};