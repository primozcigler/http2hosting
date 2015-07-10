/**
 * Utility functions used throughout the template
 */
Utils = {
	priceRangeAsIcons: function (price) {
		var range = this.maxMinPrice(),
			nprice;

		// normalized price
		if (0 !== (range.max - range.min)) {
			nprice = ((price - range.min) / (range.max - range.min)) * 4 + 1;
			nprice = Math.round(nprice);
		}
		else {
			nprice = 3;
		}

		return Array(nprice + 1).join('<i class="glyphicon glyphicon-usd"></i>');
	},

	maxMinPrice: function () {
		var max = Providers.findOne({}, {sort: {price: -1}, fields: {price: 1}});
		var min = Providers.findOne({}, {sort: {price: 1}, fields: {price: 1}});

		return {
			min: min.price,
			max: max.price,
		};
	},
};