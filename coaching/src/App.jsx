import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home"
import CoursesPage from "./Pages/CoursesPage";
import About from './Component/About/About'
import Gallery from "./Component/Gallery/Gallery";
import Gallerypage from "./Pages/Gallerypage";
import Facilities from "./Component/Facilities/Facilities";
import AdmissionForm from "./Component/AdmissionForm/AdmissionForm";
import Address from "./Component/Address/Address";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";

// NEW imports
import UserLogin from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
      
    
    <BrowserRouter>
  <ScrollToTop />
   <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<CoursesPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/facilities" element={<Facilities/>}  />

        <Route path="admission" element={<AdmissionForm/>}/>
        <Route path="address" element={<Address/>} />

        <Route path='/gallerypage' element={<Gallerypage/>}/>

        <Route path="/footer" element={<Footer/>} />

        {/* NEW routes */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
  <Footer />

    </BrowserRouter>
  );
}

export default App;
