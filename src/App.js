import React, { Component } from "react";
import "./App.css";
import Cita from "./components/Cita";
import Autor from "./components/Autor";
import Change from "./components/Boton";
import quoteMock from "./mocks/quotes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [],
      quote: "",
      autor: "",
      loading: true,
    };
  }

  showCitas() {
    console.log(this.state.citas);
  }

  componentDidMount() {
    this.setState({
      citas: quoteMock,
      quote: quoteMock[0].text,
      autor: quoteMock[0].author,
      loading: false,
    });
  }

  hola = () => {
    let a = Math.floor(Math.random() * 522);
    this.setState({
      quote: this.state.citas[a].text,
      autor: this.state.citas[a].author,
    });
  };
  render() {
    if (!this.state.loading) {
      return (
        <div className="App">
          <Cita quote={this.state.quote} />
          <Autor author={this.state.autor} />
          <Change
            name="Next Quote"
            funHola={this.hola}
            cita={this.state.quote}
            autor={this.state.autor}
          />
        </div>
      );
    } else {
      return <div>Cargando...</div>;
    }
  }
}

export default App;
