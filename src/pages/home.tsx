import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Trending from "../components/Trending/Trending";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      
      <About />
      <Trending />
      <Footer />
    </>
  );
};

export default Home;
