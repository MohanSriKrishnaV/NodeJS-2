const { env } = require("process");
process.env.USERNAME = "10x";
console.log("hello " + process.env.USERNAME);
