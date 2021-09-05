import React from 'react';
import reactLogo from '../img/react-logo.jpg'
const ReactComp = () => {
  console.log(' React component render')
  return ( 
    <> 
    <img src={reactLogo} alt="React logo" />
    </>
   );
}
 
export default ReactComp;