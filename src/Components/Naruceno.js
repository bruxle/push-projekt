import Slika from "../Slike/smile.png";
import React, { Component } from "react";

export class Menu extends Component {
  state = {
    ime: "",
    prezime: "",
    adresa: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    alert(
      "Narudžba je poslana. Igračka dolazi na adresu " +
        this.state.adresa +
        ". Doći će za par dana!"
    );
  };
  render() {
    return (
      <div class="narudzba">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          Naručuje {this.state.ime} {this.state.prezime}
        </h1>
        <form onSubmit>
          <input
            placeholder="Ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <input
            placeholder="Prezime"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />
          <input
            placeholder="Adresa"
            value={this.state.adresa}
            onChange={(e) => this.setState({ adresa: e.target.value })}
          />
          <button className="botun" onClick={(e) => this.onSubmit(e)}>
            Pošalji
          </button>
        </form>
        <center>
          <img src={Slika} className="smile" alt="smile" />
        </center>
      </div>
    );
  }
}

export default Menu;
