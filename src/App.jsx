import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home/Home";
import  About  from "./Pages/About";
import  Herbs  from "./Pages/Articles/Herbs";
import  NuskhaJaat from "./Pages/Articles/NuskhaJaat";
import  HerbalMedicine  from "./Pages/Articles/HerbalMedicine";
import  GeneralHealth  from "./Pages/Articles/GeneralHealth";
import  Male  from "./Pages/Articles/Male";
import  Female  from "./Pages/Articles/Female";
import  Kids  from "./Pages/Articles/Kids";
import  Pansar  from "./Pages/Products/Pansar";
import  HerbalProducts  from "./Pages/Products/HerbalMedicine";
import  NuskhaPorducts  from "./Pages/Products/NuskhaJaat";
import  Contact  from "./Pages/Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/herbs" element={<Herbs />} />
            <Route path="/nuskhajaat" element={<NuskhaJaat />} />
            <Route path="/herbalmedicine" element={<HerbalMedicine />} />
            <Route path="/generalhealth" element={<GeneralHealth />} />
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
  </>
  );
}

export default App;