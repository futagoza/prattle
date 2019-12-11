"use strict";

const AsyncEventEmitter = require( "emittery" );
const BenchmarkRunner = require( "./BenchmarkRunner" );

class Runner extends AsyncEventEmitter {

    /**
     *
     * @param {Object} options
     * @param {string} options.reporter
     * @param {string} options.ui
     * @param {number} options.timeout
     */

    constructor( options = {} ) {

        super();

        this.options = {

            ui: options.ui || "prattle",
            reporter: options.reporter || "console",
            timeout: options.timeout || 5000,

        };

        /** @type Object<string, Set<Function>> */
        this._tests = {};

    }

    /**
     *
     * @param {string} description
     * @param {function} group
     */

    describe( description, _group ) {

        this._tests[ description ] = this._tests[ description ] || new Set();

    }

    /**
     *
     * @param {string} description
     * @param {function} action
     */

    test( description, action ) {

        this._tests[ description ].add( { description, action } );

    }

    /**
     *
     * @param {string} description
     * @param {function} cases
     */

    benchmark( description, _cases ) {

        this._tests[ description ] = [];

    }

}

module.exports = Runner;
