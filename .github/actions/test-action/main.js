const core = require("@actions/core");

console.log("action triggered");

core.setOutput("some-secretvalue", "secret content");