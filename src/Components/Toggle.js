import React from 'react'
class Toggle extends React.Component
{
  constructor(){
    super()
    this.state={
      show: true
    }
  }
  render()
  {
    return(
      <>
      {
      this.state.show?
      <h4>this ia a toggle component</h4>
      :null
  }
      <button onClick={()=>this.setState({show:!this.state.show})}>click</button>
      </>
    )
  }
}
export default Toggle;