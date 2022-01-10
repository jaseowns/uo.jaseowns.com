const { createRequestHandler } = require("@remix-run/vercel");

console.log("Test");

module.exports = createRequestHandler({
  build: require("./_build")
});
