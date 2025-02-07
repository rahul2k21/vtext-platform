import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Platform from "../src/Pages/Platform";
import Customer from "../src/Pages/Customer";
import Company from "../src/Pages/Company";
import Solutions from "./Pages/Solutions";
import Partners from "./Pages/Partners";
import Resources from "./Pages/Resources";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
