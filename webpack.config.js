const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const buildPath = path.join(__dirname, "build");
console.log(buildPath)
module.exports = (env, options) => {
    const servermode = options.mode === "development";
    return {
        devtool : servermode ? "source-map" : false,
        resolve : {
            extensions: [".js"],
        },
        module : {
            rules : [
                {
                    test : /\.js?$/,
                    use : ["babel-loader"]
                },
                {
                    test : /\.css$/,
                    use : [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options : {
                                sourceMap: servermode
                            }
                        },
                    ]
                },
            ]
        },
        output : {
            path: buildPath,
            filename : 'bundle.umd.js',
            libraryTarget : 'umd',
            globalObject : 'this',
            libraryExport : 'default',
            library : 'dataTableUmd'
        },
        plugins : [
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                template : path.join(path.join(__dirname, "src"), "index.html")
            })
        ]
    }
}