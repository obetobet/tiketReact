const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve('./tsconfig.json'),
                            compilerOptions: {
                                noEmit: false,
                              },
                        },
                    },
                ],
            },{
                test: /\.d\.ts$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          favicon: "./public/favicon.ico",
        }),
   new MiniCssExtractPlugin({
          linkType: "text/css",
        }),
      ],
    
  };