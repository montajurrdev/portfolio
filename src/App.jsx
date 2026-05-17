import "./App.css";
import About from "./components/layouts/About";
import Banner from "./components/layouts/Banner";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Projects from "./components/layouts/Projects";
import Skill from "./components/layouts/Skill";
import UiElements from "./components/layouts/UiElements";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <UiElements />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
