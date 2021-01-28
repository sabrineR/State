import { Button } from "react-bootstrap";
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from "./Component/Person";

 class App extends Component {
  state={
    show:false
  }
  showComponent=()=>{
    this.setState({show:!this.state.show})
    }
  
  render() {
    return (
      <div className='App'>
          <Button variant="secondary" size="lg" block onClick={this.showComponent}>
      {this.state.show?'Hide Profil':'Show Profil'}
       </Button>
      {this.state.show && <Person/>}
      
        
      </div>
    )
  }
}


export default App;
