'use strict';

const ab = require("@kalyanov/ab");

function abc() {
    return `${ab()}-c`;
}

module.exports = abc;