const core = require("@actions/core");

console.log("action triggered");

core.setSecret("secret content");
core.setOutput("some-secretvalue", "secret content");