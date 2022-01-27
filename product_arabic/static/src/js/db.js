odoo.define('product_arabic.DB', function (require) {
"use strict";

var PosDB = require('point_of_sale.DB');

    PosDB.include({
        /**
         * Add arabic name into the search regular expression
         *
         * @override
         */
        _product_search_string: function(product){
            var str = product.display_name;
            if (product.barcode) {
                str += '|' + product.barcode;
            }
            if (product.default_code) {
                str += '|' + product.default_code;
            }
            if (product.description) {
                str += '|' + product.description;
            }
            if (product.description_sale) {
                str += '|' + product.description_sale;
            }
            if (product.product_arabic) {
                str += '|' + product.product_arabic;
            }
            str  = product.id + ':' + str.replace(/:/g,'') + '\n';
            return str;
        },

    });
});

