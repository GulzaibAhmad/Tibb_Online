import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home/Home";
import  About  from "./Pages/About";
import  Blog  from "./Pages/Blog";
import  Contact  from "./Pages/Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;