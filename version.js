var Version = require("node-version-assets");

var versionInstance = new Version({
    assets: ['dist/css/main.min.css', 'dist/js/script.min.js'],
    grepFiles: ['dist/index.html']
});
versionInstance.run();
