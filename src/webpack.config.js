"use strict";

const dedent = require( "dedent" );
const path = require( "path" );
const webpack = require( "webpack" );
const VERSION = require( "../package.json" ).version;

module.exports = {

    mode: process.argv.includes( "--watch" ) ? "development" : "production",
    entry: path.join( __dirname, "browser", "index.ts" ),
    output: {
        path: path.join( __dirname, "..", "dist" ),
        filename: "prattle.js",
        library: "prattle",
        libraryTarget: "umd",
        umdNamedDefine: true,
        sourcePrefix: "  ",
    },
    optimization: {
        minimize: true,
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "babel-loader",
                    options: {

                        "comments": false,
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "modules": false,
                                    "targets": {
                                        "ie": 11,
                                    },
                                },
                            ],
                            "@babel/preset-typescript",
                        ],

                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin( {
            banner: dedent`

                /**
                 * Prattle v${ VERSION }, [hash]
                 * https://prattle.now.sh/
                 *
                 * Copyright (c) 2019+ Futago-za Ryuu
                 *
                 * Released under the MIT License.
                 */

                /* eslint-disable */

            `,
            raw: true,
        } ),
    ],

};
