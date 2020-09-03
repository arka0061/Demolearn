import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {

  state={
    username:'Superman'

  }

usernamechangedhandler=(event)=>{
  this.setState({
    username:event.target.value});
}
  render() {
    return (
      <div className="App">
      <UserInput userinput={this.usernamechangedhandler} cname={this.state.username}>
      </UserInput>
      <UserOutput usrname={this.state.username}></UserOutput>
      <UserOutput usrname={this.state.username}></UserOutput>
      <UserOutput usrname="Max"></UserOutput>
        
       
      </div>
    );
  }
}

export default App;
