"use strict";

const fs = require( "fs" );
const babel = require( "rollup-plugin-babel" );
const json = require( "rollup-plugin-json" );

const target = process.env.ROLLUP_TARGET || "browser";
global.USING_ROLLUP = true;

module.exports = {

    entry: `src/${ target }/bootstrap.js`,
    banner: fs.readFileSync( "src/banner.js", "utf8" ),
    plugins: [
        json(),
        babel( require( "./src/.babelrc" ) )
    ],
    dest: `dist/pow.${ target }.js`,
    format: "umd",
    sourceMap: true

};
