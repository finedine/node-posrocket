const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = accessToken => {
  return {
    list: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.COUNTRY_LIST
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
    get: async id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.COUNTRY_LIST}/${id}`
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
    listCities: async (country_id, ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${
              constants.COUNTRY_LIST
            }/${country_id}/${constants.CITY}?ordering=${
              ordering ? ordering : "id"
            }&page=${page ? page : 1}&page_size=${page_size ? page_size : 100}`
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
    getCity: async (country_id, city_id) => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.COUNTRY_LIST}/${country_id}/${constants.CITY}/${city_id}`
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
