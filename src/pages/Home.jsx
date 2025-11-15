import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import TicTacToe from "../components/games/TicTacToe";

const Home = () => {
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <TicTacToe /> */}
    </>
  );
};

export default Home;
