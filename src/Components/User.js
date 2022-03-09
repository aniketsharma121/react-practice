import {Component} from "react";
// import  Userlist from "./Userlist";
export default class User extends Component{
  constructor(){
    super()
    this.state ={
    
      count: 0 
    }
    // this.updateState = this.updateState.bind(this);
  }
  updateState(){
    this.setState({
      count : this.state.count+1
    })
  }
render()
{
  return(
    <>
    <h1>count {this.state.count }</h1>
      <button onClick={()=>this.updateState()}>update number</button>
    </>
  )
}
}
