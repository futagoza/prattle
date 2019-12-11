"use strict";

const prattle = require( "./prattle.core" );

prattle.use( require( "../reporters/console" ) );
prattle.use( require( "../reporters/html" ) );
prattle.use( require( "../reporters/json" ) );
prattle.use( require( "../ui/chai" ) );
// prattle.use( require( "../ui/prattle" ) ); <-- Built-in to `prattle.core.js`
prattle.use( require( "../ui/referee" ) );
