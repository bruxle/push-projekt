import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="header">
      <ul>
        <h1 class="naslov">ZAIGRAJ</h1>
        <li>
          <Link to="/onama">O nama</Link>
        </li>
        <li>
          <Link to="/napravi">Napravi igračku</Link>
        </li>
        <li>
          <Link to="/">Naslovna</Link>
        </li>
      </ul>
    </div>
  );
}
