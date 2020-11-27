import React from 'react';
import {Redirect, useHistory } from 'react-router-dom'
import {Link,BrowserRouter as Router} from "react-router-dom"

const DropButton = React.forwardRef((props, ref) => {
  
  const handleStatus = () => {
    console.log("Hey")
    props.status()
  }
  
  return (
    <Router>
      <div onClick={handleStatus} ref={ref} className={`drop-button ${props.className}`}>+</div>
    </Router>
  )
});

export default DropButton;
