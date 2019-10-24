const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = accessToken => {
  return {
    list: async (ordering) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_size=${page_size ? page_size : 100}`
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
        throw error;
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
        throw error;
      }
    },
    listDiscounts: async (location_id, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.DISCOUNTS}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${page_size ? page_size : 100}`
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
        throw error;
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
        throw error;
      }
    },
    listDrawers: async (
      location_id,
      ordering,
      page,
      page_size,
      begin_time,
      end_time,
      creator_id,
      reference
    ) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.DRAWERS}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${
              page_size ? page_size : 100
            }&begin_time=${begin_time ? begin_time : ""}&end_time=${
              end_time ? end_time : ""
            }&creator_id=${creator_id ? creator_id : ""}&reference=${
              reference ? reference : ""
            }`
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
        throw error;
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
        throw error;
      }
    },
    listExtraCharges: async (
      location_id,
      name,
      ordering,
      page,
      page_size,
      type
    ) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.EXTRA_CHARGES}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${
              page_size ? page_size : 100
            }&name=${name ? name : ""}&type=${type ? type : ""}`
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
        throw error;
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
        throw error;
      }
    },
    listItems: async (
      location_id,
      name,
      ordering,
      category_id,
      tag_id,
      tax_id
    ) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.ITEMS}?ordering=${
              ordering ? ordering : "id"
            }&name=${name ? name : ""}&category_id=${
              category_id ? category_id : ""
            }&tax_id=${tax_id ? tax_id : ""}&tag_id=${tag_id ? tag_id : ""}`
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
        throw error;
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
        throw error;
      }
    },
    listOrderOptions: async (location_id, name, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.ORDER_OPTIONS}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${
              page_size ? page_size : 100
            }&name=${name ? name : ""}`
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
        throw error;
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
        throw error;
      }
    },
    listRegisters: async (location_id, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.REGISTERS}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${page_size ? page_size : 100}`
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
        throw error;
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
        throw error;
      }
    },
    listSales: async (
      location_id,
      ordering,
      page,
      page_size,
      begin_time,
      end_time,
      creator_id,
      customer_id,
      payment_method
    ) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.SALES}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${
              page_size ? page_size : 100
            }&begin_time=${begin_time ? begin_time : ""}&end_time=${
              end_time ? end_time : ""
            }&creator_id=${creator_id ? creator_id : ""}&customer_id=${
              customer_id ? customer_id : ""
            }&payment_method=${payment_method ? payment_method : ""}`
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
        throw error;
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
        throw error;
      }
    },
    listRefunds: async (location_id, sale_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.SALES}/${sale_id}/${constants.REFUNDS}`
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
        throw error;
      }
    },
    listTabs: async (
      location_id,
      ordering,
      page,
      page_size,
      status,
      sequence_number
    ) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.TABS}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 0}&page_size=${
              page_size ? page_size : 100
            }&status=${status ? status : ""}&sequence_number=${
              sequence_number ? sequence_number : ""
            }`
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
        throw error;
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
        throw error;
      }
    },
    listTabCategories: async (location_id, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.TABS}/${
              constants.CATEGORIES
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_size=${page_size ? page_size : 100}`
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
        throw error;
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
        throw error;
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
        throw error;
      }
    },
    createTab: async (location_id, payload) => {
      try {
        const res = await superagent
          .post(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}`
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
        throw error;
      }
    },
    listTabTemplates: async (location_id, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.LOCATIONS
            }/${location_id}/${constants.TABS}/${
              constants.TEMPLATES
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_size=${page_size ? page_size : 100}`
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
        throw error;
      }
    },
    getTabTemplate: async (location_id, tab_temp_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${constants.TEMPLATES}/${tab_temp_id}`
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
        throw error;
      }
    },
    assignTabPickup: async (location_id, tab_id, payload) => {
      try {
        const res = await superagent
          .post(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${tab_id}/${constants.ASSIGN_PICKUP}`
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
        throw error;
      }
    },
    unassignTabPickup: async (location_id, tab_id, payload) => {
      try {
        const res = await superagent
          .post(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${tab_id}/${constants.UNASSIGN_PICKUP}`
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
        throw error;
      }
    },
    cancelTab: async (location_id, tab_id, payload) => {
      try {
        const res = await superagent
          .post(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.LOCATIONS}/${location_id}/${constants.TABS}/${tab_id}/${constants.CANCEL}`
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
        throw error;
      }
    }
  };
};
