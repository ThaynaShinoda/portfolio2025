import { AboutMe } from "./components/AboutMe/AboutMe";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}
