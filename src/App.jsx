import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
