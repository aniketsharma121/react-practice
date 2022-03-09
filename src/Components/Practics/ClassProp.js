import React from 'react';
class ClassProp extends React.Component{
  // constructor(props){
  //   super(props)
 
  // }

  render(){
    return(
      <>
      <h1> {this.props.data.name}</h1>
        <button onClick={this.props.data.clickFun}>Click</button>
      </>
    )
  }
}
export default ClassProp; 