const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = (baseUrl, accessToken) => {
  return {
    customers: {
      list: async (ordering, page, page_size, name, phone) => {
        try {
          let url = `${baseUrl}/${constants.VERSION}/${constants.DIRECTORY}/${
            constants.CUSTOMERS
          }?ordering=${ordering ? ordering : "id"}&page=${
            page ? page : 1
          }&page_size=${page_size ? page_size : 100}`;
          if (name && name != "") url += `&name=${escape(name).toLowerCase()}`;
          if (phone && phone != "") url += `&phone=${escape(phone)}`;
          const res = await superagent
            .get(url)
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
              `${baseUrl}/${constants.VERSION}/${constants.DIRECTORY}/${constants.CUSTOMERS}/${id}`
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
      create: async payload => {
        try {
          const res = await superagent
            .post(
              `${baseUrl}/${constants.VERSION}/${constants.DIRECTORY}/${constants.CUSTOMERS}`
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
    }
  };
};
