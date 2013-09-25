function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createRow({
        code: "undefined" != typeof $model.__transform["code"] ? $model.__transform["code"] : $model.get("code"),
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: ""
    });
    $.__views.row.add($.__views.image);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        text: "undefined" != typeof $model.__transform["item"] ? $model.__transform["item"] : $model.get("item"),
        id: "__alloyId55"
    });
    $.__views.row.add($.__views.__alloyId55);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;