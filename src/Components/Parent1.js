import React from 'react';
import Child1 from './Child1'
class Parent1 extends React.Component{
  constructor (props){
    super(props)
    this.state={
      name: 'ani'
    }
  }
  update=()=>{
    this.setState({
      name :'aniket'
    })
  }
  render(){
    return(
      <>
      <h3>{this.state.name}</h3>
       {/* <button onClick={()=>this.update()} >change</button>  */}
      <Child1 update={this.update} />
      </>
    )
  }
}
export default Parent1;
