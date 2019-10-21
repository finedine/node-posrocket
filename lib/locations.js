const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = accessToken => {
  return {
    list: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_ize=${page_size ? page_size : 100}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    get: async id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listDiscounts: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.DISCOUNTS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getDiscount: async (location_id, discount_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.DISCOUNTS}/${discount_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listDrawers: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.DRAWERS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getDrawer: async (location_id, drawer_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.DRAWERS}/${drawer_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listExtraCharges: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.EXTRA_CHARGES}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getExtraCharge: async (location_id, extra_charge_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.EXTRA_CHARGES}/${extra_charge_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listItems: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.ITEMS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getItem: async (location_id, item_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.ITEMS}/${item_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listOrderOptions: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.ORDER_OPTIONS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getOrderOptions: async (location_id, order_option_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.ORDER_OPTIONS}/${order_option_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listRegisters: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.REGISTERS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getRegister: async (location_id, register_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.REGISTERS}/${register_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listSales: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.SALES}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getSale: async (location_id, sale_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.SALES}/${sale_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listRefunds: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.REFUNDS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getRefund: async (location_id, refund_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.REFUNDS}/${refund_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listTabs: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getTab: async (location_id, tab_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${tab_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    listTabCategories: async location_id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${constants.CATEGORIES}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    getTabCategory: async (location_id, tab_cat_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${constants.CATEGORIES}/${tab_cat_id}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    },
    previewTab: async (location_id, payload) => {
      try {
        const res = await superagent
          .post(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${constants.PREVIEW_TAB}`
          )
          .set("Authorization", `Bearer ${accessToken}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error.response.error;
      }
    }
  };
};
