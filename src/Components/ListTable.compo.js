import { Component, useReducer } from "react";
import bootstrap from "bootstrap";
class ListTableCompo extends Component{
  constructor(){
    super();
    this.state={
      users:[{
        name :'aniket', email:'An@m.com', contact:'963258741',address:'Panchsheel nagar',
        name: 'ankit', email: 'am@m.com', contact: '789456123', address: 'Panchsheel nagar',
        name: 'aman', email: 'Ao@m.com', contact: '741258963', address: 'Panchsheel nagar',
        name: 'amit', email: 'Ap@m.com', contact: '987456321', address: 'Panchsheel nagar',
        name: 'ankur', email: 'Aq@m.com', contact: '123456789', address: 'Panchsheel nagar',
        name: 'abhishek', email: 'Ar@m.com', contact: '852147963', address: 'Panchsheel nagar',
        name: 'aakash', email: 'As@m.com', contact: '976454210', address: 'Panchsheel nagar',
        name: 'arihant', email: 'At@m.com', contact: '123789654', address: 'Panchsheel nagar',
      }]
    }
    }
    
  
  render()
  {
    return(
      <>
        
      <h3>this is a list component</h3>
      
      </>

    )
  }
}
export default ListTableCompo;