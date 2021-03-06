'use strict';

function create (responseConfig, stubIndexFn) {
    const helpers = require('../util/helpers'),
        cloned = helpers.clone(responseConfig || { is: {} });

    cloned.stubIndex = stubIndexFn ? stubIndexFn : () => require('q')(0);

    cloned.setMetadata = (responseType, metadata) => {
        Object.keys(metadata).forEach(key => {
            responseConfig[responseType][key] = metadata[key];
            cloned[responseType][key] = metadata[key];
        });
    };
    return cloned;
}

module.exports = { create };
