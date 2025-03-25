import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact-us";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
