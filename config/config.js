const { loadEnvFile } = require('node:process');
loadEnvFile('.env');

var env = process.env.NODE_ENV || 'development';
console.log("NODE_ENV=" + process.env.NODE_ENV)