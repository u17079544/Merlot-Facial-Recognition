const common = require("./common.js");
const expect = common.chai.expect;

describe('Facial Recognition System', function () {
    // beforeEach(function () {
    //    console.log("running something before each test");
    // });
    require('./database/database-test.js');
    // after(function () {
    //     console.log("after all tests");
    // });
});

// const { spawn } = require('child_process');
// const request = require('request');
// const test = require('tape');

// // Start the app
// const env = Object.assign({}, process.env, {PORT: 5000});
// const child = spawn('node', ['index.js'], {env});

// test('responds to requests', (t) => {
//   t.plan(4);

//   // Wait until the server is ready
//   child.stdout.on('data', _ => {
//     // Make a request to our app
//     request('http://127.0.0.1:5000', (error, response, body) => {
//       // stop the server
//       child.kill();

//       // No error
//       t.false(error);
//       // Successful response
//       t.equal(response.statusCode, 200);
//       // Assert content checks
//       t.notEqual(body.indexOf("<title>Node.js Getting Started on Heroku</title>"), -1);
//       t.notEqual(body.indexOf("Getting Started with Node on Heroku"), -1);
//     });
//   });
// });
