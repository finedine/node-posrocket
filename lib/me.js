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
        throw error.response.error;
      }
    },
    listEmployees: async (ordering, page, page_size) => {
      try {
        const res = await superagent
          .get(
            `${url}/${constants.VERSION}/${constants.ME}/${
              constants.EMPLOYEES
            }?ordering=${ordering ? ordering : "id"}&page=${
              page ? page : 0
            }&page_ize=${page_size ? page_size : 100}`
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
        throw error.response.error;
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
        throw error.response.error;
      }
    }
  };
};