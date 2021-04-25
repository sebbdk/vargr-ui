const path = require('path');

module.exports = ({ config }) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: "preact/compat",
        'react-dom': 'preact/compat'
    })

    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../src/stories"),
        path.resolve(__dirname, "../src"),
    ];

    return config;
}