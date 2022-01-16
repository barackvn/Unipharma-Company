# -*- coding: utf-8 -*-
##############################################################################
# Copyright (c) 2017-Present Webkul Software Pvt. Ltd. (<https://webkul.com/>)
# See LICENSE file for full copyright and licensing details.
# License URL : <https://store.webkul.com/license.html/>
##############################################################################

from odoo import models

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def _get_combination_info(self, combination=False, product_id=False, add_qty=1, pricelist=False, parent_combination=False, only_template=False):
        res = super(ProductTemplate, self)._get_combination_info(
            combination, product_id, add_qty, pricelist, parent_combination, only_template)
        product_id = res and res.get('product_id', 0)
        if product_id:
            product = self.env['product.product'].browse(int(product_id))
            if product.exists():
                res.update(default_code=product.default_code or product.id)
        return res