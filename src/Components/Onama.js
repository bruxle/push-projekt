import Slika from "../Slike/igracke.jpg";
import Slika2 from "../Slike/igracke2.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>O nama</h1>
      <div className="prvi">
        <img src={Slika} className="igracke" alt="igracke" />
        <h4 className="tekst">
          ZAIGRAJ vaš je profesionalni partner za svaki aspekt igračaka, sporta
          i slobodnog vremena. ZAIGRAJ okuplja dubinsko znanje o industriji,
          međunarodni tim i opsežan skup profesionalnih, pouzdanih dobavljača.
        </h4>
      </div>
      <div className="drugi">
        <img src={Slika2} className="igracke2" alt="igracke" />
        <h4 className="tekst2">
          Naša tvrtka je jedan od 20 najvećih proizvođača igračaka na njemačkom
          tržištu. Od 1999. godine brinemo o našim brojnim međunarodnim kupcima
          od početne ideje do isporuke gotovog proizvoda.
        </h4>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
