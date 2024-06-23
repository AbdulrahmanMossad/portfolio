import { useEffect, useState, useRef } from "react";
import "./header.css";
import { CiSun } from "react-icons/ci";
const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowModal(false);
        document.body.style.overflow = "scroll";
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  const [showModal, setShowModal] = useState(false);
  const handelExit = () => {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  };
  const handelOpen = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  const handelTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // console.log(theme);
  return (
    <header className="flex " id="pageUp">
      <a className=" menu" onClick={handelOpen}>
        <span className="fa-solid fa-bars"></span>
      </a>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li><a href="">Articles</a></li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li><a href="">Speaking</a></li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <a className="moon" onClick={handelTheme}>
        {theme === "light" ? (
          <i className="fa-solid fa-lightbulb"></i>
        ) : (
          <span className="fa-regular fa-moon"></span>
          
        )}
      </a>
      {showModal === true ? (
        <div className=" fixed">
          <ul className="modal" ref={wrapperRef}>
            <li>
              {" "}
              <a onClick={handelExit} style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-xmark exit"></i>
              </a>
            </li>
            <li>
              <a href="/" onClick={handelExit}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handelExit}>
                About
              </a>
            </li>
            {/* <li><a href="">Articles</a></li> */}
            <li>
              <a href="#projects" onClick={handelExit}>
                Projects
              </a>
            </li>
            {/* <li><a href="">Speaking</a></li> */}
            <li>
              <a href="#contact" onClick={handelExit}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
