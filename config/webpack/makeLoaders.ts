export function makeLoaders() {
    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [ typescriptLoader ]
}