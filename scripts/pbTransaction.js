var pbTransaction = function(amount, paidBy, paidFor, remarks) {

	var pbt = {};
	pbt.amount = amount;
	pbt.paidBy = paidBy;
	pbt.paidFor = paidFor;
	pbt.remarks = remarks;


	return pbt;

};