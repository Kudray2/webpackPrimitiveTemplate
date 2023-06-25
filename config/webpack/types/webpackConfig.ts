export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    htmlTemplate: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
}