const core = require("@actions/core");

const input = core.getInput("something");
console.log("consume triggered with", input);