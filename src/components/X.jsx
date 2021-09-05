import React from "react"
import xfLogo from '../img/780px-The_X-Files_logo.svg.png'
const X = () => {
  console.log(" X comp render")
  return (
    <div className="xc">
      <hr />
      <h1>X comp </h1>
      <img src={xfLogo} alt="x files logo" />
    </div>
  )
}

export default X
