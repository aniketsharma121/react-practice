import { Component } from "react";
import bootstrap from "bootstrap";
import FormCompoData from "./FormCompoData";
import './Asset/Style.css';
class FormComponent1 extends Component {
constructor(props){
  super(props);
  console.log(props)
}
    render() {
      let { nameErr, emailErr, mobileErr, addressErr, passwordErr } = this.props.formErr

      return (
        <>
          <div className="login-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6  ">
                  <div className="coln-data">
                    <h1>REGISTER</h1>
                    <form>
                      <div>
                       
                        <input className="input" type="text" placeholder="Enter your name*" onChange={(event) => this.props.changehandler(event)}  name="name"/>
                        <div>{nameErr && nameErr}</div>
                      </div>

                      <div>
                        
                        <input className="input" type="text" placeholder="Enter your email*" onChange={(event) => this.props.changehandler(event)} name="email" />
                        <div>{emailErr && emailErr}</div>
                      </div>

                      <div>
                       
                        <input className="input" type="text" placeholder="Enter your number*" onChange={(event) => this.props.changehandler(event)} name="mobile" />
                        <div>{mobileErr&& mobileErr}</div>
                      </div>
                      <div>
                        
                        <input className="input" type="text" placeholder="Enter your address*" onChange={(event) => this.props.changehandler(event)} name="address" />
                        <div>{addressErr && addressErr}</div>
                      </div>
                      <div>
                       
                        <input className="input" type="text" placeholder="Enter your password*" onChange={(event) => this.props.changehandler(event)} name="password" />
                        <div>{passwordErr && passwordErr}</div>
                      </div>
                      

                      
                      
                        
                      {/* <p>
                        <input className="input" type="text" placeholder="Your E-mail*" onChange={(event) => this.props.changehandler(event)} />
                      </p>
                      <p>
                        <input className="input" type="text" placeholder="Enter your number*" onChange={(event) => this.props.changehandler(event)} />
                      </p>
                      <p>
                        <input className="input" type="text" placeholder="Enter your Address*" onChange={(event) => this.props.changehandler(event)} />
                      </p>
                      <p>
                        <input className="input" type="text" placeholder="Enter your password*" onChange={(event) => this.props.changehandler(event)} />
                      </p> */}


                      {/* { nameErr!=="" || emailErr!=="" ? 
                      null
                      :
                      
                      } */}
                     
                      
                      <button
                        className="input1"
                        onClick={(event) => this.props.submitHandler(event)}>
                        REGISTER
                      </button>
                      
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )
    }
  }
export default FormComponent1;