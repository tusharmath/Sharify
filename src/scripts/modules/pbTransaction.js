var pbTransaction = function(payers, payees, remarks, tag) {

	var pbt = {};



	pbt.payers = payers;
	pbt.payees = payees;
	pbt.remarks = remarks;

	pbt.tag = tag;

	return pbt;

};