"use strict";

module.exports = {

    "extends": [

        "@futagoza/node/8",
        "@futagoza/vue",

    ],

    "overrides": [ {

        "files": [
            "*.spec.js",
            "*.test.js",
        ],
        "extends": "@futagoza/dev/test",

    } ],

    "root": true,

};
