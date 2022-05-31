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
      <form class="margin" name="forms" action="index.html">
        <div class="forms">
          <div class="forms2">
            <fieldset>
              <legend> Tip igračke</legend>
              <select name="igracka" size="2">
                <option>Odaberi tip igračke</option>
                <option value="1">Plišana</option>
                <option value="2">Lego</option>
                <option value="3">Akcijska figura</option>
              </select>
              <select name="velicina" size="2">
                <option value="1">Mala</option>
                <option value="2">Srednja</option>
                <option value="2">Velika</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Majice</legend>
              <input type="radio" name="odjeca" value="1" />
              Kapetan
              <input type="radio" name="odjeca" value="2" />
              Mornar
              <input type="radio" name="odjeca" value="3" />
              Vojnik
            </fieldset>
            <fieldset>
              <legend>Boja očiju</legend>
              <input type="radio" name="umak" value="1" />
              Zelene
              <input type="radio" name="umak" value="2" />
              Plave
              <input type="radio" name="umak" value="3" />
              Smeđe
            </fieldset>
            <fieldset>
              <legend>Dodatne upute</legend>
              <textarea name="upute" rows="3" cols="42"></textarea>
            </fieldset>
            <Link className="naruci" to="/naruceno">
              Naruči
            </Link>
            <hr />
            <input className="reset" type="reset" value="Reset" />
          </div>
          <div class="forms2">
            <fieldset>
              <legend>Odaberi dodatke - 5kn svaki</legend>
              <div class="forms2">
                <input type="checkbox" name="dodatak" value="1" /> Kravata
                <br />
                <input type="checkbox" name="dodatak" value="2" /> Sat
                <br />
                <input type="checkbox" name="dodatak" value="3" /> Nakit
                <br />
                <input type="checkbox" name="dodatak" value="4" /> Mašna
                <br />
                <input type="checkbox" name="dodatak" value="5" /> Naočale
                <br />
                <input type="checkbox" name="dodatak" value="6" /> Narukvice
                <br />
              </div>
              <div class="forms2">
                <input type="checkbox" name="dodatak" value="7" /> Knjiga
                <br />
                <input type="checkbox" name="dodatak" value="8" /> Mač
                <br />
                <input type="checkbox" name="dodatak" value="9" />
                Maska
                <br />
                <input type="checkbox" name="dodatak" value="10" /> Čaša
                <br />
                <input type="checkbox" name="dodatak" value="11" /> Mobitel
                <br />
                <input type="checkbox" name="dodatak" value="12" /> Češalj
                <br />
              </div>
              <div class="cell1">
                <table className="tablica">
                  <tr>
                    <td>Mala</td>
                    <td>30kn</td>
                  </tr>
                  <tr>
                    <td>Srednja</td>
                    <td>40kn</td>
                  </tr>
                  <tr>
                    <td>Velika</td>
                    <td>55kn</td>
                  </tr>

                  <tr>
                    <td colspan="2">Dodatci</td>
                  </tr>
                  <tr>
                    <td>5kn</td>
                    <td>Svaki</td>
                  </tr>
                </table>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
}
