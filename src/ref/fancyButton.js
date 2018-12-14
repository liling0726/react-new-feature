import React from 'react'
const FancyButton = React.forwardRef((props,ref)=>(
  <button ref={ref} className="fancy-btn" onClick={props.handleClick}> 
  {props.children}
  </button>
))
export default FancyButton