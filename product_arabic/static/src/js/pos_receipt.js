odoo.define('product_arabic.pos_receipt', function (require) {
"use strict";

var models = require('point_of_sale.models');
//var exports = {};
models.load_fields("product.product", ['product_arabic']);



var _super_orderline = models.Orderline.prototype;
    models.Orderline = models.Orderline.extend({
    export_for_printing: function() {
        var line = _super_orderline.export_for_printing.apply(this,arguments);
        line.product_name_arabic = this.get_product().product_arabic;
        console.log(line)
        return line;
    },

});


});
