const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = accessToken => {
  return {
    get: async () => {
      try {
        const res = await superagent
          .get(`${constants.BASE_URL}/${constants.VERSION}/${constants.ME}`)
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
    listEmployees: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${url}/${constants.VERSION}/${constants.ME}/${
              constants.EMPLOYEE_LIST
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 1
            }&page_size=${page_size ? page_size : 100}`
          )
          .set("Authorization", `Bearer ${apiKey}`)
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
    getEmployee: async id => {
      try {
        const res = await superagent
          .get(
            `${url}/${constants.VERSION}/${constants.ME}/${constants.EMPLOYEES}/${id}`
          )
          .set("Authorization", `Bearer ${apiKey}`)
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
    listPaymentMethods: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${url}/${constants.VERSION}/${constants.ME}/${
              constants.PAYMENT_METHODS
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_size=${page_size ? page_size : 100}`
          )
          .set("Authorization", `Bearer ${apiKey}`)
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
    getPaymentMethod: async id => {
      try {
        const res = await superagent
          .get(
            `${url}/${constants.VERSION}/${constants.ME}/${constants.PAYMENT_METHODS}/${id}`
          )
          .set("Authorization", `Bearer ${apiKey}`)
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
