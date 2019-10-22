const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const credentials = require("../test.credentials");

const PR = require("../lib/posrocket")();

const POSRocket = PR.initialize(credentials.ACCESS_TOKEN);

describe("- ME", () => {
  before(async () => {
      
  });
  it("should retrieve ME", async () => {
    try {
      const me = await POSRocket.me.get();
      expect(me).to.be.a("object");
      expect(me.id).to.exist;
      console.log(`    Retrieved Me ID: ${me.id}`);
    } catch (error) {
      console.log(error);
    }
  });
});
