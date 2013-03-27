var pbTransaction = function(shareValuesBy, shareValuesFor, remarks, tags) {

	var pbt = {};



	pbt.paidBy = shareValuesBy;
	pbt.paidFor = shareValuesFor;
	pbt.remarks = remarks;

	pbt.tags = tags;

	return pbt;

};