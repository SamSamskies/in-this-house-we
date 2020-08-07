#!/usr/bin/env node

const inThisHouseWe = require("../index").default;

const args = process.argv.slice(2);

console.log(inThisHouseWe(args.join('\n')));