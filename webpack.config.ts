import {makeWebpackConfig} from "./config/webpack/makeWebpackConfig";
import {BuildMode, BuildPaths} from "./config/webpack/types/webpackConfig";
import path from "path";

const paths:BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build')
}
const mode: BuildMode = 'development'

const config =  makeWebpackConfig({paths, mode})



export default config