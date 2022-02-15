import React, { Component } from 'react';
  
class ConstructorCheck extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
      
    // Creating state
    this.state = {
      data: 'My name is User'
    }
      
    // Binding event handler
    this.handleEvent = this.handleEvent.bind(this);
  }
  
  handleEvent() {
    console.log(this.props);
  }
  
  render() {
    return (
      <div >
        <input type="text" value={this.state.data} />
        <br></br> <br></br>
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}
  
export default ConstructorCheck;