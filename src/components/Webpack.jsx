import React from "react"
import wpLogo from "../img/webp-logo.png"
const WebpackComp = () => {
  console.log(" Webpack component render")
  return (
    <>
      <img src={wpLogo} alt="webpack logo" />
    </>
  )
}

export default WebpackComp
