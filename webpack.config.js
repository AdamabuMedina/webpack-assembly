const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
        analytics: "./src/analytics.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}