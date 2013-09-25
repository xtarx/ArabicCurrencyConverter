exports.definition = {
	config: {
		columns: {
		    "name": "string",
		    "code": "string",
		    "image": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "currencies"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};