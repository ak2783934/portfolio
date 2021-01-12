import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
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
    </div>
  );
}

export default App;
