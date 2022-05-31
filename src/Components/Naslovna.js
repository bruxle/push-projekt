import Slika from "../Slike/rammie.jpg";
import Slika2 from "../Slike/lego.jpg";
import Slika3 from "../Slike/action.jpg";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div>
        <center>
          <div className="naslovna">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="plisani">
              <img src={Slika} className="rammie_slika" alt="rammie" />
              <h2 className="plisanitekst">Plišane igračke</h2>
              <br />
              <br />
              <br />
              <br />
              <p className="plisanidesc">
                Naše plišane igračke su najmekše i najbolje kvalitete.
              </p>
            </div>
            <div className="lego">
              <img src={Slika2} className="lego_slika" alt="lego" />
              <h2 className="legotekst">Lego</h2>
              <br />
              <br />
              <br />
              <br />
              <p className="legodesc">
                Za dijecu koja uživaju u procesu rađenja igračaka
              </p>
            </div>
            <div className="action">
              <img src={Slika3} className="action_slika" alt="rammie" />
              <h2 className="actiontekst">Akcijske figure</h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="actiondesc">
                Najbolje akcijske figure za svu dijecu
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </center>
      </div>
    </div>
  );
}
