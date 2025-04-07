import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact-us";
import { Home } from "./pages/home";
import { Blogs } from "./pages/blogs";
import { MounjaroCompare } from "./pages/mounjaro-compare";
import { WegovyCompare } from "./pages/wegovy-compare";
function App() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/mounjaro-compare" element={<MounjaroCompare />} />
          <Route path="/wegovy-compare" element={<WegovyCompare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
