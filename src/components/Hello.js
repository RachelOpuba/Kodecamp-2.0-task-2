import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ebikella Opuba",
    };
  }

  handleNameChange() {
     this.setState({
      name: "Booboo Johnson",
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name} from class comoponents</h1>
        <button onClick={() => this.handleNameChange()}>click me</button>
      </div>
    );
  }
}
export default Hello;
