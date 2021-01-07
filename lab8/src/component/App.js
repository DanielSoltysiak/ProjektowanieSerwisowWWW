// Import pakietów
import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

// Eksportowana klasa
export default class App extends React.Component {
  // Ustawienie stanu początkowego aplikacji
  state = {
    total: null,
    next: null,
    operation: null,
  };

  // Funkcja wywoływana przy naciśnięciu przycisku
  // Ustawia stan za pomocą komponentu calculate
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  // Zwracany div - składa się z komponentów Display i Button Panel
  // Funkcja Display odpowiada "za wyświetlacz" kalkulatora
  // Funkcja ButtonPanel odpowiada za "klawiaturę"
  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
