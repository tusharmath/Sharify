var pbUserShares = function(pbShareList, amount) {

	var _shareList = [];
	var _shareListType;


	var _addShare = function(share) {


		var _listType;

		if (share instanceof pbShareRatioType) {
			_listType = pbUserShares.shareType.RATIO;
		} else if (share instanceof pbShareValueType) {
			_listType = pbUserShares.shareType.VALUE;
		} else throw new InvalidParameterTypeExecption();


		if (_listType == _shareListType || _shareListType === undefined) {
			_shareList.push(share);
			_shareListType = _listType;
		}
	};

	var _listShares = function() {
		if (_shareListType == this.shareType.RATIO) {
			var totalShare = 0;
			var result = [];
			_shareList.foreach(function(p) {
				totalShare += p.share;
			});

			_shareList.foreach(function(p) {

				var k = new pbPayShareValueType(p.user, p.baseAmount * p.share / totalShare);
				result.push(k);
			});

			return result;
		} else if (_shareListType == this.shareType.VALUE) {
			return _shareList;
		}
	};


	var _removeShare = function(index) {

		throw NotImplementedException();
	};



	return {
		addShare: _addShare,
		removeShare: _removeShare,
		listShares: _listShares
	};

};

pbUserShares.shareType = {
	VALUE: 0,
	RATIO: 1

};