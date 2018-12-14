import React from 'react'
import FancyButton from './fancyButton'
const ref = React.createRef()
function RefIndex(props){
  const handleClick=()=>{
    console.log(ref)
  }
  return <React.Fragment>
    <h2>测试转发ref</h2>
    <FancyButton ref={ref} handleClick={handleClick}>click me!</FancyButton>
  </React.Fragment>
  
}
export default RefIndex