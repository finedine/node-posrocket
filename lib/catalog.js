const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = (baseUrl, accessToken) => {
  return {
    listCategories: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${
              constants.CATEGORIES
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
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
    getCategory: async category_id => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${constants.CATEGORIES}/${category_id}`
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
    listItems: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${
              constants.ITEMS
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
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
    getItem: async item_id => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${constants.ITEMS}/${item_id}`
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
    listModifierLists: async (name, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${
              constants.MODIFIER_LIST
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
            }&page_size=${page_size ? page_size : 100}&name=${name ? name : ""}`
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
    getModifierList: async modifier_list_id => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${constants.MODIFIER_LIST}/${modifier_list_id}`
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
    listTags: async (name, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${
              constants.TAGS
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
            }&page_size=${page_size ? page_size : 100}&name=${name ? name : ""}`
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
    getTag: async tag_id => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${constants.TAGS}/${tag_id}`
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
    listTaxes: async (name, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${
              constants.TAXES
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
            }&page_size=${page_size ? page_size : 100}&name=${name ? name : ""}`
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
    getTax: async tax_id => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${constants.CATALOG}/${constants.TAXES}/${tax_id}`
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
    }
  };
};
