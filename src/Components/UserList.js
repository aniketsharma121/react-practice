import {Component} from 'react'

class Userlist extends Component{
  constructor(){
    super()
    console.log("Constructor");

    // this.state = {
    //   users: [
    //     { name: 'Amits' },
    //     { name: 'Aniket' },
    //     { name: 'Nikhil' },
    //     {name: 'Ravi'},
    //   ]
    // }

    this.state = {
      count: 0
    }
  }


  clickHandler = () => {
    console.log("Clicked")
    this.setState({count: this.state.count + 1})
  }
  componentDidMount(){
    console.log('Component did mount');
  }

  componentDidUpdate(){
    console.log('Component did update');
  }

  componentWillUnmount(){
    console.log('Component will unmount');

  }

  render(){
    console.log("Render");
    return(
      <>
       <h2>This is user list Component {this.state.count}</h2>
       {/* <button onClick={this.clickHandler}>Cuont</button> */}
       
       {/* <ul>
       {
          this.state.users.map((user, i) =>
            <li key={i}>{user.name}</li>
          )
       }
        </ul> */}
      </>
    )
  }
}

export default Userlist;