import React from 'react'
class Listing extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: 'ravindra', email:"r@mail.com", phone:123456789 },
        { name: 'Aniket', email: "an@mail.com", phone: 127878999  },
        { name: 'Nikhil', email: "ni@mail.com", phone: 123454544 },
        { name: 'raju', email: "ra@mail.com", phone: 14555454545 },
        { name: 'Ram', email: "ram@mail.com", phone: 14555454545 },
      ],
      show:true,
      user:{}
    }
  }

  getUser = (user) => {
    console.log(user)
    this.setState({user:user})
    this.setState({show:false})
  }

  render()
  {
    return (
      <>
        <table>
          <tbody>
            {
              this.state.show?
                this.state.users.map((user, i) =>
                  <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><button onClick={() => this.getUser(user)}>View Details</button></td>
                  </tr>
                  )
                  :
                  <tr>
                    <td>{this.state.user.name}</td>
                    <td>{this.state.user.email}</td>
                    <td>{this.state.user.phone}</td>
                  </tr>
            }
            </tbody>
        </table>
         
         {this.state.show?
          null
        :<button onClick={() => this.setState({ show: true })}>Back</button>
         }
      </>
    )
  }
}
export default Listing;