import React from 'react';
class Child1 extends React.Component{
  render()
  {
    console.log(this)
    return(
      <>
      this is a child component
      <h1>{this.props.update}</h1>
      <button onClick={()=>this.props.update('aniket')}>click</button> 
      </>
    )
  }
}
export default Child1;