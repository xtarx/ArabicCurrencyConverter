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
        $.equals.show();
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
        visible: false,
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
        text: "",
        id: "result"
    });
    $.__views.pop1.add($.__views.result);
    $.__views.to = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        id: "to"
    });
    $.__views.pop1.add($.__views.to);
    $.__views.picker1 = Ti.UI.createPicker({
        bottom: 0,
        width: "50%",
        height: 0,
        right: 0,
        id: "picker1",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.__alloyId1.add($.__views.picker1);
    $.__views.__alloyId3 = Ti.UI.createPickerColumn({
        id: "__alloyId3"
    });
    $.__views.picker1.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        code: "EGP",
        name: "جنيه مصري",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "جنيه مصري",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        code: "SAR",
        name: "ريال سعودي",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال سعودي",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        code: "KWD",
        name: "دينار كويتي",
        id: "__alloyId8"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار كويتي",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerRow({
        code: "AED",
        name: "درهم إماراتي",
        id: "__alloyId10"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "درهم إماراتي",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        code: "BAD",
        name: "دينار بحريني",
        id: "__alloyId12"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار بحريني",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        code: "OMR",
        name: "ريال عماني",
        id: "__alloyId14"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال عماني",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        code: "QTR",
        name: "ريال قطري",
        id: "__alloyId16"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال قطري",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        code: "JOD",
        name: "دينار إردني",
        id: "__alloyId18"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار إردني",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        code: "USD",
        name: "دولار امريكى",
        id: "__alloyId20"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار امريكى",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createPickerRow({
        code: "EUR",
        name: "يورو",
        id: "__alloyId22"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "يورو",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createPickerRow({
        code: "GBP",
        name: "إسترليني",
        id: "__alloyId24"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "إسترليني",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createPickerRow({
        code: "CAD",
        name: "دولار كندي",
        id: "__alloyId26"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار كندي",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createPickerRow({
        code: "DKK",
        name: "كرونا دنماركي",
        id: "__alloyId28"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا دنماركي",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createPickerRow({
        code: "NOK",
        name: "كرونا نرويجي",
        id: "__alloyId30"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا نرويجي",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createPickerRow({
        code: "SEK",
        name: "كرونا سويدى",
        id: "__alloyId32"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا سويدى",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createPickerRow({
        code: "CHF",
        name: "فرنك سويسرى",
        id: "__alloyId34"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "فرنك سويسرى",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createPickerRow({
        code: "JPY",
        name: "ين ياباني",
        id: "__alloyId36"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ين ياباني",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createPickerRow({
        code: "AUD",
        name: "دولار إسترالي",
        id: "__alloyId38"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار إسترالي",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.picker2 = Ti.UI.createPicker({
        bottom: 0,
        width: "50%",
        height: 0,
        left: 0,
        id: "picker2",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.__alloyId1.add($.__views.picker2);
    $.__views.__alloyId41 = Ti.UI.createPickerColumn({
        id: "__alloyId41"
    });
    $.__views.picker2.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createPickerRow({
        code: "EGP",
        name: "جنيه مصري",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "جنيه مصري",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createPickerRow({
        code: "SAR",
        name: "ريال سعودي",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال سعودي",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createPickerRow({
        code: "KWD",
        name: "دينار كويتي",
        id: "__alloyId46"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار كويتي",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createPickerRow({
        code: "AED",
        name: "درهم إماراتي",
        id: "__alloyId48"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "درهم إماراتي",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createPickerRow({
        code: "BAD",
        name: "دينار بحريني",
        id: "__alloyId50"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار بحريني",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createPickerRow({
        code: "OMR",
        name: "ريال عماني",
        id: "__alloyId52"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال عماني",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createPickerRow({
        code: "QTR",
        name: "ريال قطري",
        id: "__alloyId54"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ريال قطري",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createPickerRow({
        code: "JOD",
        name: "دينار إردني",
        id: "__alloyId56"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دينار إردني",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createPickerRow({
        code: "USD",
        name: "دولار امريكى",
        id: "__alloyId58"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار امريكى",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createPickerRow({
        code: "EUR",
        name: "يورو",
        id: "__alloyId60"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "يورو",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createPickerRow({
        code: "GBP",
        name: "إسترليني",
        id: "__alloyId62"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "إسترليني",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createPickerRow({
        code: "CAD",
        name: "دولار كندي",
        id: "__alloyId64"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار كندي",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createPickerRow({
        code: "DKK",
        name: "كرونا دنماركي",
        id: "__alloyId66"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا دنماركي",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createPickerRow({
        code: "NOK",
        name: "كرونا نرويجي",
        id: "__alloyId68"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا نرويجي",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createPickerRow({
        code: "SEK",
        name: "كرونا سويدى",
        id: "__alloyId70"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "كرونا سويدى",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createPickerRow({
        code: "CHF",
        name: "فرنك سويسرى",
        id: "__alloyId72"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "فرنك سويسرى",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createPickerRow({
        code: "JPY",
        name: "ين ياباني",
        id: "__alloyId74"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "ين ياباني",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createPickerRow({
        code: "AUD",
        name: "دولار إسترالي",
        id: "__alloyId76"
    });
    $.__views.__alloyId41.addRow($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#336699",
        text: "دولار إسترالي",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
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