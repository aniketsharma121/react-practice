import React from 'react';
import bootstrap from 'bootstrap';
class FormComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      formdata: { name: '', email: '', password: '', address: '', mobile: '' },
      formErr: {}
    }
  }
  valid() {

    const { name, email, password, address, mobile } = this.state.formdata
    let formIsValid = true;
    let formErr = {};
    // console.log(this.state)
    if (!name) {
      formIsValid = false;
      formErr['nameErr'] = "*You cant't skip this colon"
    }
    //console.log(email)
    if (!email) {
      formIsValid = false;
      formErr['emailErr'] = "*Email id is required.";
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

      formIsValid = false;
      formErr["emailErr"] = "Invalid email id.";
    }   
    if (!password){
      formIsValid=false;
      formErr['passwordErr']="*Password is required.";
    } 
    
    // console.log(formErr);

    this.setState({ formErr: formErr });
    return formIsValid;
  }

  handleChange(e){
    this.setState({ 
      formdata: 
      { 
        ...this.state.formdata, 
      
        [e.target.name]: e.target.value 
      } 
    })
  }

  submitHandle = (e) => {
    // console.log(this.state);
    e.preventDefault();
    if (this.valid()) {
      console.log("Form submitted successfully")
    }else{
      alert("Form not submitted successfully")
    }
  }
  render() {
    const { nameErr,emailErr,passwordErr} = this.state.formErr
    return (
      <>
        <h4> Registration Form</h4>
        <div className='row'>
          <div className='col-md-6 col-xm-12 col-xl-6 col-xs-12 col-sm-12 bg-warning text-black border" '>
            <form className='float-starttext-center' >
              <div className="mb3">
                
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    name="name"
                    onChange={
                      (e) => this.handleChange(e)
                    } 
                    value={this.state.formdata.name} />
                  <div>{nameErr && nameErr}</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    name="email"
                    onChange={
                      (e) => this.handleChange(e)
                    } 
                    value={this.state.formdata.email} />
                  <div>{emailErr && emailErr}</div>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="password" onChange={(e) => this.handleChange(e)} value={this.state.password} />
                <div>{passwordErr && passwordErr}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="address" onChange={(e) => this.setState({ address: e.target.value })} />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile No</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="mobile" onChange={(e) => this.setState({ mobile: e.target.value })} />
              </div>
              {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" >Check me out</label>
              </div> */}
              <button type="submit" className="btn btn-success" onClick={(e) => this.submitHandle(e)}>Submit</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default FormComponent;