import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar";
import Home from "./home";
import Skills from "./skill";
import Projects from "./project";
import Experiences from "./experience";
import Contacts from "./contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Experiences />
      <Contacts />
      <footer className={"footer-app"}>
        Made with <span className={"span-footer"}>love</span> by Avinash
      </footer>
    </div>
  );
}

export default App;
