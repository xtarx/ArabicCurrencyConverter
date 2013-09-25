function Controller() {
    function convert() {
        var amount = $.amount.value;
        if (null == amount || "" == amount) {
            alert(L("emptyAmount"));
            return;
        }
        var from = $.picker1.getSelectedRow(0).code;
        var to = $.picker2.getSelectedRow(0).code;
        if (from == to) {
            alert(L("sameCurrency"));
            return;
        }
        var url = "http://rate-exchange.appspot.com/currency?from=" + from + "&to=" + to + "&q=" + amount;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                var jsonObject = JSON.parse(this.responseText);
                var fromName = $.picker1.getSelectedRow(0).name;
                var toName = $.picker2.getSelectedRow(0).name;
                $.from.text = fromName;
                $.result.text = jsonObject.v;
                $.to.text = toName;
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    function hideKeyBoard() {
        $.amount.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#ecf0f1",
        layout: "vertical",
        exitOnClose: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    hideKeyBoard ? $.__views.index.addEventListener("click", hideKeyBoard) : __defers["$.__views.index!click!hideKeyBoard"] = true;
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.pop1 = Ti.UI.createView({
        top: "5%",
        layout: "vertical",
        id: "pop1"
    });
    $.__views.__alloyId1.add($.__views.pop1);
    $.__views.amount = Ti.UI.createTextField({
        width: "50%",
        height: "10%",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "amount",
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    });
    $.__views.pop1.add($.__views.amount);
    $.__views.from = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار امريكى",
        id: "from"
    });
    $.__views.pop1.add($.__views.from);
    $.__views.equals = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        font: {
            fontSize: "20dp"
        },
        top: "7%",
        text: "=",
        id: "equals"
    });
    $.__views.pop1.add($.__views.equals);
    $.__views.result = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        text: "102323",
        id: "result"
    });
    $.__views.pop1.add($.__views.result);
    $.__views.pop2 = Ti.UI.createView({
        left: "30%",
        top: "10%",
        layout: "horizontal",
        id: "pop2"
    });
    $.__views.pop1.add($.__views.pop2);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        width: "14%",
        height: "7%",
        image: "usa_flag_icon.jpg",
        id: "__alloyId2"
    });
    $.__views.pop2.add($.__views.__alloyId2);
    $.__views.to = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        textAlign: "center",
        text: "دولار امريكى",
        id: "to"
    });
    $.__views.pop2.add($.__views.to);
    $.__views.picker1 = Ti.UI.createPicker({
        bottom: 0,
        width: "50%",
        height: 0,
        left: 0,
        id: "picker1",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.__alloyId1.add($.__views.picker1);
    $.__views.__alloyId4 = Ti.UI.createPickerColumn({
        id: "__alloyId4"
    });
    $.__views.picker1.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        code: "EGP",
        name: "جنيه مصري",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "جنيه مصري",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        code: "SAR",
        name: "ريال سعودي",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال سعودي",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        code: "KWD",
        name: "دينار كويتي",
        id: "__alloyId9"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار كويتي",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createPickerRow({
        code: "AED",
        name: "درهم إماراتي",
        id: "__alloyId11"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "درهم إماراتي",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        code: "BAD",
        name: "دينار بحريني",
        id: "__alloyId13"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار بحريني",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        code: "OMR",
        name: "ريال عماني",
        id: "__alloyId15"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال عماني",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createPickerRow({
        code: "QTR",
        name: "ريال قطري",
        id: "__alloyId17"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال قطري",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        code: "JOD",
        name: "دينار إردني",
        id: "__alloyId19"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار إردني",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createPickerRow({
        code: "USD",
        name: "دولار امريكى",
        id: "__alloyId21"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار امريكى",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createPickerRow({
        code: "EUR",
        name: "يورو",
        id: "__alloyId23"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "يورو",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createPickerRow({
        code: "GBP",
        name: "إسترليني",
        id: "__alloyId25"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "إسترليني",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createPickerRow({
        code: "CAD",
        name: "دولار كندي",
        id: "__alloyId27"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار كندي",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createPickerRow({
        code: "DKK",
        name: "كرونا دنماركي",
        id: "__alloyId29"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا دنماركي",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createPickerRow({
        code: "NOK",
        name: "كرونا نرويجي",
        id: "__alloyId31"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا نرويجي",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createPickerRow({
        code: "SEK",
        name: "كرونا سويدى",
        id: "__alloyId33"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا سويدى",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createPickerRow({
        code: "CHF",
        name: "فرنك سويسرى",
        id: "__alloyId35"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "فرنك سويسرى",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createPickerRow({
        code: "JPY",
        name: "ين ياباني",
        id: "__alloyId37"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ين ياباني",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createPickerRow({
        code: "AUD",
        name: "دولار إسترالي",
        id: "__alloyId39"
    });
    $.__views.__alloyId4.addRow($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار إسترالي",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.picker2 = Ti.UI.createPicker({
        bottom: 0,
        width: "50%",
        height: 0,
        right: 0,
        id: "picker2",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.__alloyId1.add($.__views.picker2);
    $.__views.__alloyId42 = Ti.UI.createPickerColumn({
        id: "__alloyId42"
    });
    $.__views.picker2.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createPickerRow({
        code: "GBP",
        name: "إسترليني",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "إسترليني",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createPickerRow({
        code: "CAD",
        name: "دولار كندي",
        id: "__alloyId45"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار كندي",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createPickerRow({
        code: "DKK",
        name: "كرونا دنماركي",
        id: "__alloyId47"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا دنماركي",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createPickerRow({
        code: "NOK",
        name: "كرونا نرويجي",
        id: "__alloyId49"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا نرويجي",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createPickerRow({
        code: "SEK",
        name: "كرونا سويدى",
        id: "__alloyId51"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا سويدى",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createPickerRow({
        code: "CHF",
        name: "فرنك سويسرى",
        id: "__alloyId53"
    });
    $.__views.__alloyId42.addRow($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "فرنك سويسرى",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.Gesture.addEventListener("shake", function() {
        convert();
        hideKeyBoard();
    });
    $.picker1.addEventListener("change", function() {
        var amount = $.amount.value;
        if (null == amount || "" == amount) return;
        convert();
    });
    $.picker2.addEventListener("change", function() {
        var amount = $.amount.value;
        if (null == amount || "" == amount) return;
        convert();
    });
    $.amount.addEventListener("change", function() {
        var amount = $.amount.value;
        if (null == amount || "" == amount) return;
        convert();
    });
    Titanium.Network.networkType === Titanium.Network.NETWORK_NONE && alert(L("noInternet"));
    $.index.open();
    __defers["$.__views.index!click!hideKeyBoard"] && $.__views.index.addEventListener("click", hideKeyBoard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;