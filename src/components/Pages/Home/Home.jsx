import './home.css'
import Hero from "./Hero/Hero";
import NavBar from "./Navbar/NavBar";
import Trending from './Trending/Trending';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Trending/>
    </>
  );
};

export default Home;
