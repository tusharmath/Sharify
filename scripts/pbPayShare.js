var pbPayShare = function(pbShareList, amount) {

	var _shareList = [];
	if (amount === null) {
		_shareList = pbShareList;
	} else {
		var _totalShare = 0;
		for (var i = pbShareList.length - 1; i >= 0; i--) {
			_totalShare += pbShareList[i].share;
		}


		for (var j = pbShareList.length - 1; j >= 0; j--) {
			var s = pbShareList[j];
			var n = new pbShare(s.user, amount * s.share / _totalShare);
			_shareList.push(n);
		}

	}

	return _shareList;

};