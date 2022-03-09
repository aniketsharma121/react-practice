import React from 'react';
import Child from './Child';
class Parent extends React.Component{
  constructor(props){
  super(props)
  this.state ={
    name: 'nikhil'
  }
}
  handle = (name) => {
    this.setState({ name : name});
  }


render(){
  return(
  <>
    <h1>{this.state.name}</h1>
      {/* <button type="button"onClick={this.handle}>Cupdate</button> */}
      <Child handle={this.handle}/>
  </>
  )
 }
}


export default Parent;