odoo.define('fb_pixel.VariantMixin', function(require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    require('sale.VariantMixin');
    require('website_sale.website_sale');

    publicWidget.registry.WebsiteSale.include({
        /**
         * Adds the default_code to the regular _onChangeCombination method
         * @override
         */
        _onChangeCombination: function (ev, $parent, combination){
            this._super.apply(this, arguments);
            $parent
                .find('.default_code')
                .first()
                .val(combination.default_code || combination.id)
                .trigger('change');
        }
    });
});
