var pbAlerts = function(element) {
	var _element = element;
	var _closeButton = $(element).find(".close")[0];

	var _closeAlert = function() {
		$(_element).hide();

	};

	var _showAlert = function(msg) {
		var msgContainer = $(_element).find(".msg")[0];
		$(msgContainer).html(msg);
		$(_element).show();
	};

	$(_closeButton).click(_closeAlert);

	return {
		show: _showAlert
	};
};