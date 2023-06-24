import React from "react"
import babLogo from "../img/Babel_Logo.png"
const Bcomp = () => {
  console.log("Babel component render")
  return (
    <>
      {/* <img src="./img/Babel_Logo.png" alt="Babel logo" /> */}
     <img src={babLogo} alt="Babel logo" />
    </>
  )
}

export default Bcomp
