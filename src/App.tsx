import { Routes, Route } from "react-router-dom";
import Hatale from "./pages/Hatale";
import Home from "./pages/Home";
import Anacoombra from "./pages/Anacoombra";
import Nagala from "./pages/Nagala";
import WorldsEnd from "./pages/WorldsEnd";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hatale" element={<Hatale />} />
        <Route path="/anacoombra" element={<Anacoombra />} />
        <Route path="/nagala" element={<Nagala />} />
        <Route path="/worldsend" element={<WorldsEnd />} />
      </Routes>
    </div>
  );
}

export default App;
