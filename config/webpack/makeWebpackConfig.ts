import {BuildOptions} from "./types/webpackConfig";
import {makePlugins} from "./makePlugins";
import {makeResolvers} from "./makeResolvers";
import {makeLoaders} from "./makeLoaders";

export function makeWebpackConfig(options: BuildOptions) {
    const {mode,paths} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: makeLoaders()
        },
        resolve: makeResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: makePlugins(paths)
    }

}