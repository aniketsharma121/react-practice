import { Component } from "react";

class FormComp extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      emailErr: '',
      passwordErr: ''

    }
  }

  valid() {
    if (!this.state.email.includes('@')) {
      this.setState({ emailErr: 'invalid email' })
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.Valid()) {
      alert('submit')
    }
    console.log(this.state.email)
    console.log(this.state.password)
  }




  render() {
    return (
      <>
        <h2>
          This is form component
        </h2>

        <form>
          <label>Enter your name:
            <input type="text" onChange={(e) => this.setState({ email: e.target.value })} />
          </label>
          <p>{this.state.emailErr}</p>
          <br />
          <br />
          <label>Enter your email:
            <input type="email" onChange={(e) => this.setState({ password: e.target.value })} />
          </label>
          <br />
          <br />
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>Save</button>
        </form>
      </>
    )
  }
}

export default FormComp;