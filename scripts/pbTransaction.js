var pbTransaction = function(shareValuesBy, shareValuesFor, remarks, tags) {

	if (shareValuesFor instanceof pbShareValues && shareValuesBy instanceof pbShareValues) {

		var pbt = {};



		pbt.paidBy = shareValuesBy;
		pbt.paidFor = shareValuesFor;
		pbt.remarks = remarks;

		pbt.tags = tags;

		return pbt;

	}
	throw "invalid parameter type.";


};