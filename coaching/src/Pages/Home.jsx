import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import Courses from "../Component/Courses/Courses";
import About from "../Component/About/About";
import Gallery from "../Component/Gallery/Gallery";
import { FaClipboardList } from "react-icons/fa";
import Facilities from "../Component/Facilities/Facilities";


function Home() {
  return (
    <>
     
      <Hero />
      <Courses />
      <About/>
      <Facilities/>
      <Gallery/>
      
   
    </>
  );
}

export default Home;