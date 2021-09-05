import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/webpackConfig";

export function makeLoaders(mode: BuildOptions['mode']) {
    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
        const styleLoader = {
                test: /\.s[ac]ss$/i,
                use: [
                    mode === 'development'? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: (styleFile: string) => !!styleFile.includes('.module'),
                                localIdentName: mode === 'development' ? '[path][name]__[local]' : '[hash:base64:8]'
                            }
                        }
                    },
                    "sass-loader",
                ],
            }

    return [ typescriptLoader, styleLoader ]
}