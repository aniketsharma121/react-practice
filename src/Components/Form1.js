import React from 'react';
class Form1 extends React.Component
{
  constructor(){
    super()
    this.state={
      name:'nikhil',
      email:'na@m.gamil'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    console.log(this.state.email)
  }
  changeHandle=(e)=>{
    // console.log(e.target.value)
    this.setState({ name: e.target.value })
  }
  // changeHandleName=(e)=>{
  //   //console.log(e)
  //   this.setState({ name: e.target.value })
  // }
  render()
  {
    return(
      <>
      <form>
        <p>
            <label>user name</label>
            <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
        </p>
        <p>
            <label>user email</label>
            <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
        </p>
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>Save</button>
       
      </form>
      </>

    )
  }
}
export default Form1;