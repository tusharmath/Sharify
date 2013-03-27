var pbTransaction = function(shareValuesBy, shareValuesFor, remarks, tag) {

	var pbt = {};



	pbt.paidBy = shareValuesBy;
	pbt.paidFor = shareValuesFor;
	pbt.remarks = remarks;

	pbt.tag = tag;

	return pbt;

};