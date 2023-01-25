import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick1() {
    console.log(this);
    console.log("Clicou no botão 1!");
  }
  handleClick2() {
    console.log(this);
    console.log("Clicou no botão 2!");
  }
  handleClick3 = () => {
    console.log(this);
    console.log("Clicou no botão 3!");
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick1}>Meu botão 1</button>
        <button onClick={this.handleClick2}>Meu botão 2</button>
        <button onClick={this.handleClick3}>Meu botão 3</button>
      </>
    );
  }
}

export default App;
