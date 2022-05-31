import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Naslovna from "./Components/Naslovna";
import Napravi from "./Components/Napravi";
import Naruceno from "./Components/Naruceno";
import Onama from "./Components/Onama";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/napravi" element={<Napravi />}></Route>
          <Route path="/naruceno" element={<Naruceno />}></Route>
          <Route path="/onama" element={<Onama />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
