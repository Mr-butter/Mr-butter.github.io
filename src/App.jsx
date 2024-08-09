import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
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
      <Contacts />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
