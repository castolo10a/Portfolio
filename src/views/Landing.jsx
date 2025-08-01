import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import InfoServices from "../components/InfoServices/InfoServices";

export default function Landing() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <InfoServices />
      <Contact />
    </div>
  );
}
