"use strict";

const pow = require( "./pow.core" );

pow.use( require( "../reporters/console" ) );
pow.use( require( "../reporters/html" ) );
pow.use( require( "../reporters/json" ) );
pow.use( require( "../ui/chai" ) );
// pow.use( require( "../ui/pow" ) ); <-- Built-in to `pow.core.js`
pow.use( require( "../ui/referee" ) );
