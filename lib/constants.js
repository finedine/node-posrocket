function define(name, value) {
    Object.defineProperty(exports, name, {
      value,
      enumerable: true
    });
  }
  define("BASE_URL", "http://launchpad.rocketinfra.com/api");
  define("VERSION", "v0.4.0");

  define("OAUTH", "oauth");
  define("TOKEN", "token");

  define("CATALOG", "catalog");
  define("CATEGORIES", "categories");
  define("ITEMS", "items");
  define("MODIFIER_LIST", "modifier-lists");
  define("TAGS", "tags");
  define("TAXES", "taxes");
  
  define("COUNTRY_LIST", "countries");
  define("CITY", "city");

  define("LOCATIONS", "locations");
  define("DISCOUNTS", "discounts");
  define("DRAWERS", "drawers");
  define("EXTRA_CHARGES", "extra-charges");
  define("ORDER_OPTIONS", "order-options");
  define("REGISTERS", "registers");
  define("SALES", "sales");
  define("REFUNDS", "refunds");

  define("TABS", "tabs");
  define("PREVIEW_TAB", "preview-tab");
  define("TEMPLATES", "templates");
  define("ASSIGN_PICKUP", "assign_pickup");
  define("UNASSIGN_PICKUP", "unassign-pickup");
  define("CANCEL", "cancel");

  define("ME", "me");
  define("EMPLOYEE_LIST", "employees");
  define("PAYMENT_METHODS", "payment-methods");

  define("REPORTS", "reports");
  define("END_OF_DAY", "end-of-day");
  define("SUMMARY", "summary");