import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1() {
    console.log(this);
    console.log("Clicou no botão 1!");
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
  }

  handleClick2() {
    console.log(this);
    console.log("Clicou no botão 2!");
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
  }

  handleClick3 = () => {
    console.log(this);
    console.log("Clicou no botão 3!");
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <>
        <button onClick={this.handleClick1} style={{backgroundColor: this.getButtonColor(numeroDeCliques1)}}>{ numeroDeCliques1 }</button>
        <button onClick={this.handleClick2} style={{backgroundColor: this.getButtonColor(numeroDeCliques2)}}>{ numeroDeCliques2 }</button>
        <button onClick={this.handleClick3} style={{backgroundColor: this.getButtonColor(numeroDeCliques3)}}>{ numeroDeCliques3 }</button>
      </>
    );
  }
}

export default App;
