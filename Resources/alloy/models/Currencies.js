exports.definition = {
    config: {
        columns: {
            name: "string",
            code: "string",
            image: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "currencies"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("currencies", exports.definition, []);

collection = Alloy.C("currencies", exports.definition, model);

exports.Model = model;

exports.Collection = collection;