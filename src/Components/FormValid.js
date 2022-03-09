import React from 'react'
import bootstrap from 'bootstrap';
import './Form.css'
class FormValid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      contact: '',
      address: '',
      password: '',
      email: '',
      gender: '',
      city: '',
      formErrors:{}
    };
  }
  
  handleFormvalidation(){
    console.log("7t8")

    const{name,contact,address,password, email, gender, city}=this.state
    let formErrors = {};
    let formIsValid = true;
    if (!name){
      formIsValid=false;
      formErrors['nameErr']='name is required';
    }else{
      console.log('error')
    }

    this.setState({ formErrors: formErrors });
    return formIsValid; 

    
    if (!emailId) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Email id is required.";
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {

      formIsValid = false;
      formErrors["emailIdErr"] = "Invalid email id.";
    }
  
  }


    submitHandle = (e) => {
      e.preventDefault();
      this.handleFormvalidation()
      console.log(this.state)
    }


    render()
    {
      const{ nameErr,contactErr,adressErr,passwordErr,emailErr,cityErr}=this.state.formErrors

      return (
        <>
          <form style={{ textAlign: 'center', backgroundColor: 'yellowgreen' }} onSubmit={(e) => this.submitHandle(e)}>

            <div>
              <label>User name</label>
              <input type="text" placeholder='Enter your name' onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
              {nameErr &&
                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>
              }

            </div>
            <p>
              <label>Contact</label>
              <input type="text" placeholder='Enter Mobile no' onChange={(e) => this.setState({ contact: e.target.value })} />
            </p>
            <p>
              <label>Address</label>
              <input type="text" placeholder='Your address' onChange={(e) => this.setState({ address: e.target.value })} />
            </p>
            <p>
              <label>Password</label>
              <input type="password" placeholder='your password' onChange={(e) => this.setState({ password: e.target.value })} />
            </p>

            <label>email</label>
            <input type="text" placeholder='your email' onChange={(e) => this.setState({ email: e.target.value })} />
            <p style={{ color: "red" }}>{this.state.emailErr}</p>
            <p>
              <label>Gender</label><br />
              <input type="radio" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />Male
              <input type="radio" name="gender" />Female
              <input type="radio" name="gender" />Other
            </p>
            <p>
              <label>City</label>
              <select onChange={(e) => this.setState({ city: e.target.value })}>
                <option>Dewas</option>
                <option>Dewas</option>
                <option>Dewas</option>
                <option>Dewas</option>
                <option>Dewas</option>
                <option>Dewas</option>
              </select>
            </p>
            <button type="submit" >save</button>


          </form>
        </>
      )
    }
  }


    export default FormValid;                                                                              