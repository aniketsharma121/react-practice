import React from "react";
class Child extends React.Component{
  
  render()

  {
    console.log(this)
    return(
      <>
      <h1>this is a child Component</h1>
      <button onClick={()=>this.props.handle('aniket')}>submit</button>
      </>
    )
  }
  
}
export default Child;