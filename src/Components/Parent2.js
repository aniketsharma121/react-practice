import React from  'react'
class Parent2 extends React.Component
{
constructor(){
  super()
  this.state={
    name :'aniket',
    company:'rubil corner'
  }
}
handle=()=> {
  this.setState({
    name:'sharma'
  })
 
}
  render()
  {
    return(
      <>
      <h1>{this.state.name}</h1>
      <button onClick={()=> this.handle()}> click</button>
      </>
    )
  }
}
export default Parent2;