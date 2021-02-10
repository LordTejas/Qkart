const request = require("supertest");
const httpStatus = require("http-status");
const app = require("../../src/app");
const setupTestDB = require("../utils/setupTestDB");
const { User } = require("../../src/models");
const { userOne, userTwo, insertUsers } = require("../fixtures/user.fixture");

setupTestDB();

describe("User routes", () => {
  describe("GET user data", () => {
    describe("GET specific user", () => {
      test("should return 200 and the user object if data is ok", async () => {
        await insertUsers([userOne]);

        const res = await request(app)
          .get(`/v1/users/${userOne._id}`)
          .send();

        expect(res.status).toEqual(httpStatus.OK);

        expect(res.body).toEqual(
          expect.objectContaining({
            _id: userOne._id.toString(),
            email: userOne.email,
            name: userOne.name,
            walletMoney: userOne.walletMoney,
          })
        );
      });

      test("should return 400 if userId isn't a valid MongoID", async () => {
        await insertUsers([userOne]);
        const res = await request(app)
          .get(`/v1/users/invalidMongoID`)
          .send();

        expect(res.status).toEqual(httpStatus.BAD_REQUEST);
      });

    });

  });
});
