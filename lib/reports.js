const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = accessToken => {
  return {
    endOfDay: async id => {
      try {
        const res = await superagent
          .get(
            `${constants.BASE_URL}/${constants.VERSION}/${constants.REPORTS}/${id}/${constants.END_OF_DAY}`
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
    summary: async id => {
        try {
          const res = await superagent
            .get(
              `${constants.BASE_URL}/${constants.VERSION}/${constants.REPORTS}/${id}/${constants.SUMMARY}`
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
      }
  };
};
