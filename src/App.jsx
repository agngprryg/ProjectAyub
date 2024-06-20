import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/beranda.jsx";
import PesanTiket from "./pages/pesanTiket.jsx";
import PesananSaya from "./pages/pesananSaya.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/pesanTiket" element={<PesanTiket />} />
        <Route path="/pesananSaya" element={<PesananSaya />} />
      </Routes>
    </Router>
  );
}

export default App;
