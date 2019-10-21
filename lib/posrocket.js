const moment = require("moment");
const request = require("request");
const Promise = require("bluebird");
const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = () => ({
  getToken: async (code, client_id, client_secret, redirect_uri) => {
    try {
      const res = await superagent
        .post(
          `${constants.BASE_URL}/${constants.VERSION}/${constants.OAUTH}/${constants.TOKEN}`
        )
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/x-www-form-urlencoded")
        .send(`code=${code}`)
        .send(`redirect_uri=${redirect_uri}`)
        .send(`client_id=${client_id}`)
        .send(`client_secret=${client_secret}`)
        .send("grant_type=authorization_code");
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
  refreshToken: async refreshToken => {
    return null;
  },
  initialize: accessToken => {
    return {
      me: require("./me")(accessToken),
      reports: require("./reports")(accessToken),
      locations: require("./locations")(accessToken),
      countries: require("./countries")(accessToken),
      catalog: require("./catalog")(accessToken)
    };
  }
});
