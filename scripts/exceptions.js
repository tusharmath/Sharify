var NotImplementedException = function() {
	return "Method has not been implemnted!";
};

var InvalidParameterTypeExecption = function() {

	return "An invalid type of paramter was suppied to the calling method!";
};

var UserShareNotValid = function() {

	return "Use either * or = for all payers or payees!";
};

var InvalidBalancesException = function() {

	return "The sum of net assets value of all the participants of a transaction should be ZERO!";
};