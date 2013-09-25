function openDetails(e) {
	Ti.API.info("ay i was presss");
	var movieDetailController = Alloy.createController('nsdj').getView();
	movieDetailController.open();
	Ti.API.info("ay i was presss again");
}

function convert(e) {
	var amount = $.amount.value;

	if (amount == null || amount == "") {
		//alert amount empty
		alert(L('emptyAmount'));
		return;
	}
	/*
	 var re =  /[0-9]+(\.[0-9]+)?/;
	 var ok = re.test("1");
	 ok
	 */
	var from = $.picker1.getSelectedRow(0).code;
	var to = $.picker2.getSelectedRow(0).code;
	if (from == to) {
		//alert same currency
		alert(L('sameCurrency'));
		return;
	}
	$.equals.show();

	//$.resultFrom.text = "From " + from;
	//$.resultTo.text = "To " + to;

	var url = "http://rate-exchange.appspot.com/currency?from=" + from + "&to=" + to + "&q=" + amount;
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			//Run some code here
			var jsonObject = JSON.parse(this.responseText);
			var fromName = $.picker1.getSelectedRow(0).name;
			var toName = $.picker2.getSelectedRow(0).name;

			$.from.text = fromName;
			$.result.text = jsonObject.v;
			$.to.text = toName;

		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			//alert('error');
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

function hideKeyBoard() {
	$.amount.blur();
}

Ti.Gesture.addEventListener('shake', function(e) {
	convert();
	hideKeyBoard();
});

$.picker1.addEventListener('change', function() {
	var amount = $.amount.value;

	if (amount == null || amount == "") {
		return;
	}
	convert();
});

$.picker2.addEventListener('change', function() {
	var amount = $.amount.value;

	if (amount == null || amount == "") {
		return;
	}
	convert();
});

$.amount.addEventListener('change', function() {
	var amount = $.amount.value;

	if (amount == null || amount == "") {
		return;
	}
	convert();
});
if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE) {
	alert(L('noInternet'));
}

$.index.open();
//var TiReveal = require('com.revealapp.ti');
//Ti.API.info("module is => " + TiReveal);