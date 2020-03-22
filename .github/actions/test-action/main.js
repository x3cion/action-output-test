const core = require("@actions/core");

console.log("action triggered");

core.setSecret("some-secretvalue");
core.setOutput("some-secretvalue", "secret content");