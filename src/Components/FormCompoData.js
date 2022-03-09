
import { Component } from "react";
import FormComponent1 from "./FormComponent1";

class FormCompoData extends Component{
  constructor() {
    super()
    this.state = {
      formdata: {},
      formErr: {},
      isError: false,
    }
  }
  
  handleFormvalidation= (event)=>{
    let target, form_value;
    let isError = false;

    // return;
    if(event.type==='change'){
      let { name, value} = event.target;
      target = name;
      form_value = value;
    }
    
    if (event.type==='click'){
      let { name, email, mobile, address, password } = this.state.formdata;
      target = !name ? 'name' : !name.match(/^[a-zA-Z]+$/)? 'name':!email ? 'email' : !mobile ? 'mobile' : !address ? 'address' : !password ? 'password' : '';
      form_value = !name ? name : !email ? email : !mobile ? mobile : !address ? address : !password ? password : '';
    }


    // console.log(target)
    let formErr = {};
    let errorName, errorValue;
    switch (target) {
      case 'name':
        formErr.nameErr = !form_value
          ? 'Please enter valid name'
          :
          (form_value.match(/^[a-zA-Z]+$/)===null)
            ? 'Enter valid name'
            :
            ''
        errorName = 'nameErr';
        errorValue = formErr.nameErr;
        console.log("Test",formErr)
        isError = errorValue ? true:false;
        break;
      case 'email':
        formErr.emailErr = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form_value)) ? "Please enter valid email" : ''
        errorName = 'emailErr';
        errorValue = formErr.emailErr;
        isError = errorValue ? true : false;
        break;
      case 'mobile':
        formErr.mobileErr = !/^([0-9]{10,})$/.test(form_value) ? 'Please enter valid mobile' : ''
        errorName = 'mobileErr';
        errorValue = formErr.mobileErr;
        isError = errorValue ? true : false;
        break;
      case 'address':
        formErr.addressErr = !form_value
          ? 'Please enter your address'
          :
          ((!form_value.match(/^[0-9a-zA-Z]+$/))
            ? 'Enter valid address'
            :
            '')
        errorName = 'addressErr';
        errorValue = formErr.addressErr;
        isError = errorValue ? true : false;
        break;
      // case 'password':
      //   formErr.passwordErr = !(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(form_value))
      //   isError = errorValue ? true : false;
        default:
        break;

    }

    this.setState({ 
      formErr : {
        ...this.state.formErr,
        [errorName] : errorValue
      },
      isError: isError
    });

  }

   changehandler = async (event) => {   
    
    await this.setState({
      formdata: {
        ...this.state.formdata,
        [event.target.name]: event.target.value
      }
    })

    await this.handleFormvalidation(event)

    console.log(this.state)

  }

  submitHandler = async(event) => {
    event.preventDefault();
  await this.handleFormvalidation(event)
    // console.log(this.state)

   if(!this.state.isError) {
     alert('your form is submitted successfully')
   }else{
     alert('your form is not submitted')
   }
  }
  
 
  render(){
    return(
        <FormComponent1 changehandler={this.changehandler} submitHandler={this.submitHandler} formErr={this.state.formErr}/>
    )
  }
}
export default FormCompoData;