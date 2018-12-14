import React from 'react'

 const MemoIndex  = React.memo(props=>{
  return <div className="test">这是使用React memo创建</div>
})
export default MemoIndex