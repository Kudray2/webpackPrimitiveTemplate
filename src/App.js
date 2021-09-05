import React from "react"
import Bcomp from "./components/Babelcomp.jsx"
import WebpackComp from "./components/Webpack.jsx"
import ReactComp from "./components/React.jsx"
import X from "./components/X.jsx"

function App() {
  console.log(" Webpack here and React ")

  return (
    <div classname="App">
      <Bcomp />
      <WebpackComp />
      <ReactComp />
      <X />
    </div>
  )
}
export default App
