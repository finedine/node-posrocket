[![NPM version][npm-image]][npm-url]

# node-posrocket

Simple NodeJS wrapper for [POSRocket API v1](https://developer.posrocket.com/v1/docs).

## Getting Started

### Installation

`npm install node-posrocket`

### Setup

Basically require `node-posrocket` and create a token with `getToken(code, client_id, client_secret, redirect_uri)` function to initialize wrapper.

### Example

```
const PR = require("node-posrocket");
const accessToken = PR.getToken(base_url, code, client_id, client_secret, redirect_uri); // to create an Access Token
const accessToken = PR.refreshToken(base_url, client_id, client_secret, refresh_token); // to refresh an expired Access Token
const posRocket = PR.initialize(base_url, accessToken); // initialize the wrapper with a created Access Token

try {
    const me = await posRocket.me.get(); // This will return the response body if the request is successful.
} catch (error) {
    // All functions throw an error if they encounter with an error.
}

```

## Available Functions

- **getToken(base_url, code, client_id, client_secret, redirect_uri)** // [OAuth2](https://developer.posrocket.com/blog/authentication/)\*

- **refreshToken(base_url, client_id, client_secret, refresh_token)** // [OAuth2](https://developer.posrocket.com/blog/authentication/)\*

- **me**

- - **me.get()** // [ME](https://developer.posrocket.com/v1/docs#tag/me)\*

- - **me.listEmployees(ordering, page, page_size)** // [Employee List](https://developer.posrocket.com/v1/docs#operation/me_employees_list)\*

- - **me.getEmployee(id)** // [Employee Details](https://developer.posrocket.com/v1/docs#operation/me_employees_read)\*

- - **me.listPaymentMethods(ordering, page, page_size)** // [Payment Method List](https://developer.posrocket.com/v1/docs#operation/me_payment-methods_list)\*

- - **me.getPaymentMethod(id)** // [Payment Method Details](https://developer.posrocket.com/v1/docs#operation/me_payment-methods_read)\*

- **catalog**

- - **catalog.listCategories(ordering, page, page_size)** // [Category List](https://developer.posrocket.com/v1/docs#operation/catalog_categories_list)\*

- - **catalog.getCategory(id)** // [Category Detail](https://developer.posrocket.com/v1/docs#operation/catalog_categories_read)\*

- - **catalog.listItems(ordering, page, page_size)** // [Item List](https://developer.posrocket.com/v1/docs#operation/catalog_items_list)\*

- - **catalog.getItem(id)** // [Item Detail](https://developer.posrocket.com/v1/docs#operation/catalog_items_read)\*

- - **catalog.listModifierLists(name, ordering, page, page_size)** // [Item List](https://developer.posrocket.com/v1/docs#operation/catalog_modifier-lists_list)\*

- - **catalog.getModifierList(id)** // [Item Detail](https://developer.posrocket.com/v1/docs#operation/catalog_modifier-lists_read)\*

- - **catalog.listTags(name, ordering, page, page_size)** // [Item List](https://developer.posrocket.com/v1/docs#operation/catalog_tags_list)\*

- - **catalog.getTag(id)** // [Item Detail](https://developer.posrocket.com/v1/docs#operation/catalog_tags_read)\*

- - **catalog.listTaxes(name, ordering, page, page_size)** // [Item List](https://developer.posrocket.com/v1/docs#operation/catalog_taxes_list)\*

- - **catalog.getTax(id)** // [Item Detail](https://developer.posrocket.com/v1/docs#operation/catalog_taxes_read)\*

- **countries**

- - **countries.list(ordering, page, page_size)** // [Country List](https://developer.posrocket.com/v1/docs#operation/countries_list)\*

- - **countries.get(id)** // [Country Detail](https://developer.posrocket.com/v1/docs#operation/countries_read)\*

- - **countries.listCities(country_id, ordering, page, page_size)** // [City List](https://developer.posrocket.com/v1/docs#operation/countries_city_list)\*

- - **countries.getCity(country_id, city_id)** // [City Detail](https://developer.posrocket.com/v1/docs#operation/countries_city_read)\*

- **customers**

- - **directory.customers.list(ordering, page, page_size)** // [Costumer List](https://developer.posrocket.com/v1/docs#operation/directory_customers_list)\*

- - **irectory.customers.get(id)** // [Costumer Detail](https://developer.posrocket.com/v1/docs#operation/directory_customers_read)\*

- - **irectory.customers.create(payload)** // [Costumer Create](https://developer.posrocket.com/v1/docs#operation/directory_customers_create)\*

- **locations**

- - **locations.list(ordering)** // [Location List](https://developer.posrocket.com/v1/docs#operation/locations_list)\*

- - **locations.get(id)** // [Location Detail](https://developer.posrocket.com/v1/docs#operation/locations_read)\*

- - **locations.listDiscounts(location_id, ordering, page, page_size)** // [Discount List](https://developer.posrocket.com/v1/docs#operation/locations_discounts_list)\*

- - **locations.getDiscount(location_id, discount_id)** // [Discount Detail](https://developer.posrocket.com/v1/docs#operation/locations_discounts_read)\*

- - **locations.listDrawers(location_id, ordering, page, page_size)** // [Drawer List](https://developer.posrocket.com/v1/docs#operation/locations_discounts_list)\*

- - **locations.getDrawer(location_id, drawer_id)** // [Drawer Detail](https://developer.posrocket.com/v1/docs#operation/locations_drawers_read)\*

- - **locations.listExtraCharges(location_id, name, ordering, page, page_size, type)** // [Extra Charge List](https://developer.posrocket.com/v1/docs#operation/locations_extra-charges_list)\*

- - **locations.getExtraCharge(location_id, extra_charge_id)** // [Extra Charge Detail](https://developer.posrocket.com/v1/docs#operation/locations_extra-charges_read)\*

- - **locations.listItems(location_id, name, ordering, category_id, tag_id, tax_id)** // [Location Item List](https://developer.posrocket.com/v1/docs#operation/locations_items_list)\*

- - **locations.getItem(location_id, item_id)** // [Location Item Detail](https://developer.posrocket.com/v1/docs#operation/locations_items_read)\*

- - **locations.listOrderOptions(location_id, name, ordering, page, page_size)** // [Order Option List](https://developer.posrocket.com/v1/docs#operation/locations_order-options_list)\*

- - **locations.getOrderOptions(location_id, order_option_id)** // [Order Option Detail](https://developer.posrocket.com/v1/docs#operation/locations_order-options_read)\*

- - **locations.listRegisters(location_id, ordering, page, page_size)** // [Register List](https://developer.posrocket.com/v1/docs#operation/locations_registers_list)\*

- - **locations.getRegister(location_id, register_id)** // [Register Detail](https://developer.posrocket.com/v1/docs#operation/locations_registers_read)\*

- - **locations.listRegisters(location_id, ordering, page, page_size)** // [Register List](https://developer.posrocket.com/v1/docs#operation/locations_registers_list)\*

- - **locations.getRegister(location_id, register_id)** // [Register Detail](https://developer.posrocket.com/v1/docs#operation/locations_registers_read)\*

- - **locations.listSales(location_id, ordering, page, page_size, begin_time, end_time, creator_id, customer_id, payment_method)** // [Sale List](https://developer.posrocket.com/v1/docs#operation/locations_sales_list)\*

- - **locations.getSale(location_id, sale_id)** // [Sale Detail](https://developer.posrocket.com/v1/docs#operation/locations_sales_read)\*

- - **locations.listRefunds(location_id, sale_id)** // [Sale Refund List](https://developer.posrocket.com/v1/docs#operation/locations_sales_refunds)\*

- - **locations.listTabs(location_id, ordering, page, page_size, status, sequence_number)** // [Tab List](https://developer.posrocket.com/v1/docs#operation/locations_tabs_list)\*

- - **locations.getTab(location_id, tab_id)** // [Tab Detail](https://developer.posrocket.com/v1/docs#operation/locations_tabs_templates_read)\*

- - **locations.listTabCategories(location_id, ordering, page, page_size)** // [Tab Category List](https://developer.posrocket.com/v1/docs#operation/locations_tabs_categories_list)\*

- - **locations.listTabTemplates(location_id, ordering, page, page_size)** // [Tab Template List](https://developer.posrocket.com/v1/docs#operation/locations_tabs_templates_list)\*

- - **locations.getTabTemplate(location_id, tab_temp_id)** // [Tab Template Detail](https://developer.posrocket.com/v1/docs#operation/locations_tabs_templates_read)\*

- - **locations.getTabCategory(location_id, tab_cat_id)** // [Tab Category Detail](https://developer.posrocket.com/v1/docs#operation/locations_tabs_categories_read)\*

- - **locations.previewTab(location_id, payload)** // [Tab Preview](https://developer.posrocket.com/v1/docs#operation/locations_tabs_preview_tab)\*

- - **locations.createTab(location_id, payload)** // [Tab / Order Create](https://developer.posrocket.com/v1/docs#operation/locations_tabs_create)\*

- - **locations.assignTabPickup(location_id, tab_id, payload)** // [Tab Assign Pickup](https://developer.posrocket.com/v1/docs#operation/locations_tabs_assign_pickup)\*

- - **locations.unassignTabPickup(location_id, tab_id, payload)** // [Tab Unassign Pickup](https://developer.posrocket.com/v1/docs#operation/locations_tabs_unassign_pickup)\*

- - **locations.cancelTab(location_id, tab_id, payload)** // [Tab Cancel](https://developer.posrocket.com/v1/docs#operation/locations_tabs_cancel)\*

- **reports**

- - **reports.endOfDay(id, begin_time, end_time)** // [End of Day](https://developer.posrocket.com/v1/docs#operation/reports_end_of_day)\*

- - **reports.summary(id, begin_time, end_time)** // [Summary](https://developer.posrocket.com/v1/docs#operation/reports_summary)\*

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/node-posrocket.svg?style=flat
[npm-url]: https://www.npmjs.com/package/node-posrocket
