"use strict";

const config = {

    runtime: true

};

if ( global.USING_ROLLUP === true ) {

    exports.babelrc = false;

    config.runtime = false;
    config.forceAllTransforms = true;
    config.node = false;

} else {

    exports.ignore = [ "__tests__/*.js", "*.{spec,test}.js" ];

}

exports.presets = [ [ "futagozaryuu", config ] ];

exports.sourceMaps = true;
