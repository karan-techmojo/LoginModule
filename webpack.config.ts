import path from 'path';
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";

interface Configuration extends WebpackConfig {
    devServer?: WebpackDevServerConfig;
}

const webpackConfig: Configuration = {
    entry: "./src/index.web.tsx",
    output: {
        filename: "bundle.web.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            'react-native': 'react-native-web',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ]
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        liveReload: true,
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }), 
    ],
};

export default webpackConfig;