"use strict";
/**
 * Dependencies
 */
const fs = require("fs");
const koa = require("koa");
const passport = require("koa-passport");

/**
 * Config
 */
const config = require("./config/config");


/**
 * Load the models
 */
const modelsPath = config.app.root + "/src/models";
fs.readdirSync(modelsPath).forEach(function(file) {
    if (~file.indexOf("js")) {
        require(modelsPath + "/" + file);
    }
});

/**
 * Server
 */
const app = module.exports = koa();

require("./config/passport")(passport, config);

require("./config/koa")(app, config, passport);

// Routes
require("./config/routes")(app, passport);

// Start app
if (!module.parent) {
    app.listen(config.app.port);
    console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);
