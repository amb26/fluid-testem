// A testem configuration file that attempts to break a bunch of things so that our failure modes are exercised.
/* eslint-env node */
"use strict";
var fluid = require("infusion");
var gpii  = fluid.registerNamespace("gpii");

require("../../harness");

var testemComponent = gpii.tests.testem.harness({
    wrappedEventTimeout: 1000,
    sourceDirs:  {},
    contentDirs: {},
    testPages:   [],
    coverageDir: null,
    reportsDir: null,
    testemDir: null,
    cwd: __dirname // required because we are working outside of our package root.
});

module.exports = testemComponent.getTestemOptions();
