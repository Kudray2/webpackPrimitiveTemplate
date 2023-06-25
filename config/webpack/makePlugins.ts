import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/webpackConfig";

export function makePlugins (paths: BuildPaths)  {
    return [
        new HTMLWebpackPlugin({template: paths.htmlTemplate}),
        new webpack.ProgressPlugin() // что-то непонятное. Плагин работает штатно IDE ругается.
    ]

}