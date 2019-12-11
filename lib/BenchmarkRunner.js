"use strict";

class BenchmarkRunner {

    constructor( runner ) {

        this._tests = {};
        this.runner = runner;

    }

    describe( description, _group ) {

        this._actions[ description ] = this._actions[ description ] || new Set();

    }

    test( description, action ) {

        this._actions[ description ].add( { description, action } );

    }

    benchmark( description, _cases ) {

        this._actions[ description ] = [];

    }

}

module.exports = BenchmarkRunner;
