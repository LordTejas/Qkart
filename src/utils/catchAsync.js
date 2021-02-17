/**
 * Catch and forward any error a function throws to the next middleware 
 * 
 * @param {Function} fn - input function that catchAsync wraps around
 */
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
