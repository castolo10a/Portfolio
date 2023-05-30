import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutMe from "./views/AboutMe/AboutMe";
import Projects from "./views/Projects/Projects"
import Contact from "./views/Contact/Contact"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<AboutMe />}/>
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
