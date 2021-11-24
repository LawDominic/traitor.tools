import { Routes, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Trait from './pages/Trait';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trait" element={<Trait />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
