const httpStatus = require("http-status");
const { userOne, userTwo } = require("../fixtures/user.fixture");
const { Cart } = require("../../src/models");
const { cartService } = require("../../src/services");
const {
  cartWithProductsUserOne,
  emptyCart,
  cartWithProductsUserTwo,
} = require("../fixtures/cart.fixture");
const ApiError = require("../../src/utils/ApiError");
const mockingoose = require("mockingoose").default;
const config = require("../config/config");

// Tests related to the Cart layer
describe("Cart test", () => {
  // Reset any mocked objects after each individual test
  beforeEach(() => {
    mockingoose.resetAll();
  });

  // Tests for checking checkout functionality
  describe("Checkout", () => {
    // Test a particular scenario of the checkout functionality
    it("should throw 404 error if cart is not present", async () => {
      // Mock Cart model to return `null` as output to `Cart.findOne()` call
      mockingoose(Cart).toReturn(null, "findOne");

      const res = cartService.checkout(userOne);

      /* - ApiError is thrown
       * - the "statusCode" field of response is "404 NOT FOUND"
       *
       * Example ApiError output
       * {
       *  "statusCode": 404,
       *  "message": "User does not have a cart",
       *  "stack": "<Error-stack-trace-if-present>"
       * }
       */
    });

    it("should throw 400 error if user's cart doesn't have any product", async () => {
      // Mock Cart model to return `emptyCart` object as output to `Cart.findOne()` call
      mockingoose(Cart).toReturn(emptyCart, "findOne");

      const res = cartService.checkout(userOne);

    });

    it("should throw 400 error if address is not set", async () => {
      expect(userTwo.address).toEqual(config.default_address);

      mockingoose(Cart).toReturn(cartWithProductsUserTwo, "findOne");

      const hasSetNonDefaultAddressMock = jest.fn();
      userTwo.hasSetNonDefaultAddress = hasSetNonDefaultAddressMock.mockReturnValue(
        false
      );

      const res = cartService.checkout(userTwo);

    });

    it("should throw 400 error if wallet balance is insufficient", async () => {
      mockingoose(Cart).toReturn(cartWithProductsUserOne, "findOne");

      const userOneWithZeroBalance = { ...userOne, walletMoney: 0 };

      const hasSetNonDefaultAddressMock = jest.fn();
      userOneWithZeroBalance.hasSetNonDefaultAddress = hasSetNonDefaultAddressMock.mockReturnValue(
        true
      );

      const res = cartService.checkout(userOneWithZeroBalance);

    });

    it("should update user balance and empty the cart on success", async () => {
      let userOneFinal = { ...userOne };

      userOneFinal.save = jest.fn();

      const hasSetNonDefaultAddressMock = jest.fn();
      userOneFinal.hasSetNonDefaultAddress = hasSetNonDefaultAddressMock.mockReturnValue(
        true
      );

      let cartSaveMock = (...args) => {
        expect(args[0].cartItems.length).toEqual(0);
        return args[0];
      };

      mockingoose(Cart).toReturn(cartSaveMock, "save");
      mockingoose(Cart).toReturn(cartWithProductsUserOne, "findOne");

      await cartService.checkout(userOneFinal);

      expect(hasSetNonDefaultAddressMock.mock.calls.length).not.toBe(0);

    });
  });
});
