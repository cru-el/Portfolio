console.log("NODE_ENV="+process.env.NODE_ENV)
//fetch env .config
var config = require("./config.json");
var envConfig = config;
//add env .config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);