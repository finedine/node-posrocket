const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = (baseUrl, accessToken) => {
  return {
    endOfDay: async (id, begin_time, end_time) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${
              constants.REPORTS
            }/${id}/${constants.END_OF_DAY}?begin_time=${
              begin_time ? begin_time : ""
            }&end_time=${end_time ? end_time : ""}`
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
    summary: async (id, begin_time, end_time) => {
      try {
        const res = await superagent
          .get(
            `${baseUrl}/${constants.VERSION}/${
              constants.REPORTS
            }/${id}/${constants.SUMMARY}?begin_time=${
              begin_time ? begin_time : ""
            }&end_time=${end_time ? end_time : ""}`
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
