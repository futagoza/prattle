"use strict";

const dedent = require( "dedent" );
const glob = require( "glob" ).sync;
const path = require( "path" );
const webpack = require( "webpack" );
const VERSION = require( "./package.json" ).version;

const HEADER = dedent`

    /**
     * POW v${ VERSION }, [hash]
     * https://pow.now.sh/
     *
     * Copyright (c) 2019+ Futago-za Ryuu
     *
     * Released under the MIT License.
     */

    /* eslint-disable */

`;

module.exports = {

    mode: process.argv.includes( "--watch" ) ? "development" : "production",
    entry: glob( "./lib/browser/*.js" ).reduce( ( entry, file ) => {

        entry[ path.basename( file, ".js" ) ] = require.resolve( "./lib/" + file );

        return entry;

    }, {} ),
    output: {
        path: path.join( __dirname, "dist" ),
        filename: "[name].js",
        library: [ "pow", "[name]" ],
        libraryTarget: "umd",
        umdNamedDefine: true,
        sourcePrefix: "  ",
        globalObject: "typeof self !== 'undefined' ? self : window",
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: require.resolve( "babel-loader" ),
                    options: require( "./babel.config.js" ),
                },
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin( {
            banner: HEADER,
            raw: true,
        } )
    ],

};
