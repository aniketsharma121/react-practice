import { Component } from "react";


class Input extends Component{

  constructor(){
    super()
    this.state = {
      name:"",
      email:""
    }
  }

  changeHandler(e){
    console.log(e.target)

    // this.setState({[e.target.name]:e.target.value})
    // agar key dynamic karna h to [] braket use karte h
  }

  submitHandler(e){
    e.preventDefault()
    console.log(this.state)
  }

  
  
  
  render(){
    return(
      <>
        <form>
          <div>
            Name: 
            <input 
              type="text" 
              name="name" 
              onChange={(e) => this.changeHandler(e)}
            />
          </div>

          <div>
            Email: 
            <input 
              type="text" 
              name="email" 
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          
          <div>
            <button type="submit" onClick={(e)=>this.submitHandler(e)}>Save</button>
          </div>
        </form>
      </>
    )
  }
}
  export default Input