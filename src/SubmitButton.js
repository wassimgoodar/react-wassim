import React, { Component } from "react";

class WelcomeClass extends Component {
  constructor(props){
    super(props);

    this.state =  {
      count: 0,
      count2: 89
    };

    }

 handleClick = () =>  {
        this.setState((state) => {
            return {count: state.count + 1};
        });
       
    }

  render(){
   
    return (
      <div class="alighCenter">
        <button onClick = {this.handleClick}>Submit </button>
        <div id = "output">{this.state.count}</div>
        <div id = "output2">{this.state.count2}</div>
      </div>
    );
  }
}
export default WelcomeClass;
