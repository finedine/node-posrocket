const moment = require("moment");
const request = require("request");
const Promise = require("bluebird");
const superagent = require("superagent");
const constants = require("./constants.js");

module.exports = {
  getToken: async (base_url, code, client_id, client_secret, redirect_uri) => {
    try {
      const res = await superagent
        .post(
          `${base_url}`
        )
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
      throw error;
    }
  },
  refreshToken: async (base_url, client_id, client_secret, refresh_token) => {
    try {
      const res = await superagent
        .post(
          `${base_url}/oauth/token/`
        )
        .set("Content-Type", "application/x-www-form-urlencoded")
        .send(`client_id=${client_id}`)
        .send(`client_secret=${client_secret}`)
        .send("grant_type=refresh_token")
        .send(`refresh_token=${refresh_token}`);
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
  initialize: (baseUrl, accessToken) => {
    return {
      me: require("./me")(baseUrl, accessToken),
      reports: require("./reports")(baseUrl, accessToken),
      locations: require("./locations")(baseUrl, accessToken),
      countries: require("./countries")(baseUrl, accessToken),
      catalog: require("./catalog")(baseUrl, accessToken),
      directory: require("./directory")(baseUrl, accessToken)
    };
  }
};
