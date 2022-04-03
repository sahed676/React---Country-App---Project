import React, { Component } from 'react';
import Home from "./Home";
import LogIn from './LogIn';


class CONDITIONAL_RENDERING extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn : true
  }
}


  render() {
const {isLoggedIn} = this.state;
let element;

element = isLoggedIn ? <Home /> : <LogIn />
return(
  <div>
    {element}
  </div>
)
    
  }
}


export default CONDITIONAL_RENDERING ;