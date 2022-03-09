import React from "react";
import HideCompo from "./HideCompo";
import ShowCompo  from './ShowCompo'
class CounterComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease = () => {
    if(this.state.count>0){
    this.setState({
      count: this.state.count - 1
    })
  }
  }
  reset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <>
        <HideCompo count={this.state.count}/>
        <hr />
        <ShowCompo count ={this.state.count}/>
        <hr />
        <h2>This is a counter: {this.state.count}</h2>
        
        <button onClick={() => this.increase()}>increase</button>
        <button onClick={() => this.decrease()}>decrease</button>
        <button onClick={() => this.reset()}>Reset</button>
      </>

    )
  }
}
export default CounterComponent;