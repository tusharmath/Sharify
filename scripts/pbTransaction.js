var pbTransaction = function(amount, paidByShares, paidForShares, remarks, tags) {

	var pbt = {};

	if (typeof amount === "number" && paidByShares instanceof pbShare && paidForShares instanceof pbShare && typeof remarks === "string" && typeof tags === "string") {


		pbt.amount = amount;
		pbt.paidBy = paidByShares;
		pbt.paidFor = paidForShares;
		pbt.remarks = remarks;

		pbt.tags = tags;

		return pbt;
	}

	throw "invalid creation of transaction object";


};