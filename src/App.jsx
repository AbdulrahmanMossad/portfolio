import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
function App() {
  const [upArrow, setUpArrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setUpArrow(true);
      } else {
        setUpArrow(false);
      }
    });
  }, [upArrow]);
  return (
    <div className="container ">
      <Header />
      <Hero />
      <div className="divider" id="projects" />
      <Main />
      <div className="divider" id="contact" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        className={
          upArrow === true ? "icon-chevron-up scroll2Top" : "scroll2TopHidden"
        }
        href="#pageUp"
      ></a>
    </div>
  );
}
export default App;
