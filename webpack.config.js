const path = require('path');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './resources/js/main.tsx',
        styles: './resources/css/styles.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static/Main/js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                    use: [
                            /**
                             * Style-loader: This is used to pack css as part of Main JS file
                             * MiniCssExtractPlugin: This plugin extracts CSS from main JS
                             * file as a seperate CSS file.
                             * Only Have any one of them active and comment the other
                             */
                            "style-loader", // creates style nodes from JS strings
                            // MiniCssExtractPlugin.loader, 
                            "css-loader", // translates CSS into CommonJS
                            "sass-loader", // compiles Sass to CSS, using Node Sass by default
                            "postcss-loader", // Perform PostCSS actions on SCSS
                    ]
                }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    
};