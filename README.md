# node-posrocket

Simple NodeJS wrapper for [POSRocket API](http://launchpad.rocketinfra.com/v0.4.0/docs).

## Getting Started

### Installation

`npm install node-posrocket`

### Setup

Basically require `node-posrocket` and create a token with `getToken(code, client_id, client_secret, redirect_uri)` function to initialize wrapper.

### Example

```
const PR = require("node-posrocket");
const accessToken = PR.getToken(code, client_id, client_secret, redirect_uri); // to create an Access Token
const posRocket = PR.initialize(accessToken); // initialize the wrapper with a created Access Token

try {
    const me = await posRocket.me.get(); // This will return the response body if the request is successful.
} catch (error) {
    // All functions throw an error if they encounter with an error.
}

```

## Available Functions

- **getToken(code, client_id, client_secret, redirect_uri)** // [OAuth2](http://launchpad.rocketinfra.com/blog/oauth/)\*

- **me**

- - **me.get()** // [ME](http://launchpad.rocketinfra.com/v0.4.0/docs#tag/me)\*

- - **me.listEmployees(ordering, page, page_size)** // [Employee List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/me_employees_list)\*

- - **me.getEmployee(id)** // [Employee Details](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/me_employees_read)\*

- - **me.listPaymentMethods(ordering, page, page_size)** // [Payment Method List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/me_payment-methods_list)\*

- - **me.getPaymentMethod(id)** // [Payment Method Details](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/me_payment-methods_read)\*

- **catalog**

- - **catalog.listCategories(ordering, page, page_size)** // [Category List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_categories_list)\*

- - **catalog.getCategory(id)** // [Category Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_categories_read)\*

- - **catalog.listItems(ordering, page, page_size)** // [Item List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_items_list)\*

- - **catalog.getItem(id)** // [Item Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_items_read)\*

- - **catalog.listModifierLists(name, ordering, page, page_size)** // [Item List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_modifier-lists_list)\*

- - **catalog.getModifierList(id)** // [Item Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_modifier-lists_read)\*

- - **catalog.listTags(name, ordering, page, page_size)** // [Item List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_tags_list)\*

- - **catalog.getTag(id)** // [Item Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_tags_read)\*

- - **catalog.listTaxes(name, ordering, page, page_size)** // [Item List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_taxes_list)\*

- - **catalog.getTax(id)** // [Item Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/catalog_taxes_read)\*

- **countries**

- - **countries.list(ordering, page, page_size)** // [Country List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/countries_list)\*

- - **countries.get(id)** // [Country Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/countries_read)\*

- - **countries.listCities(country_id, ordering, page, page_size)** // [City List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/countries_city_list)\*

- - **countries.getCity(country_id, city_id)** // [City Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/countries_city_read)\*

- **locations**

- - **locations.list(ordering, page, page_size)** // [Location List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_list)\*

- - **locations.get(id)** // [Location Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_read)\*

- - **locations.listDiscounts(location_id, ordering, page, page_size)** // [Discount List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_discounts_list)\*

- - **locations.getDiscount(location_id, discount_id)** // [Discount Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_discounts_read)\*

- - **locations.listDrawers(location_id, ordering, page, page_size)** // [Drawer List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_discounts_list)\*

- - **locations.getDrawer(location_id, drawer_id)** // [Drawer Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_drawers_read)\*

- - **locations.listExtraCharges(location_id, name, ordering, page, page_size, type)** // [Extra Charge List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_extra-charges_list)\*

- - **locations.getExtraCharge(location_id, extra_charge_id)** // [Extra Charge Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_extra-charges_read)\*

- - **locations.listItems(location_id, name, ordering, category_id, tag_id, tax_id)** // [Location Item List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_items_list)\*

- - **locations.getItem(location_id, item_id)** // [Location Item Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_items_read)\*

- - **locations.listOrderOptions(location_id, name, ordering, page, page_size)** // [Order Option List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_order-options_list)\*

- - **locations.getOrderOptions(location_id, order_option_id)** // [Order Option Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_order-options_read)\*

- - **locations.listRegisters(location_id, ordering, page, page_size)** // [Register List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_registers_list)\*

- - **locations.getRegister(location_id, register_id)** // [Register Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_registers_read)\*

- - **locations.listRegisters(location_id, ordering, page, page_size)** // [Register List](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_registers_list)\*

- - **locations.getRegister(location_id, register_id)** // [Register Detail](http://launchpad.rocketinfra.com/v0.4.0/docs#operation/locations_registers_read)\*

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/node-posrocket.svg?style=flat
[npm-url]: https://www.npmjs.com/package/node-posrocket
