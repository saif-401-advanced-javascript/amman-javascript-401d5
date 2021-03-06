#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();
const http = new HTTP();
options.valid() ? http.fetch(options) : help();

function help() {
  console.log(`
  api USAGE: api -m <method> -u <url> -b '<body>'

  -m - HTTP method (get/post/put/patch/delete)
  -u - URL (leading :port => localhost)
  -b - Body to send in post/put/patch
       enclosed in single quotes & JSON must be valid
  `);
  // process.exit();
}