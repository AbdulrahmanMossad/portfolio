import Lottie from "lottie-react";
import "./hero.css";
import developer from "./../animation/dev.json";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Hero = () => {
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
  return (
    <section className="hero flex " id="about">
      <div className="left-section ">
        <div className="parent-avatar">
          <motion.img
            src="./IMG_2654-modified.png"
            alt=""
            onClick={handelOpen}
            className="avatar"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
          />
          <div className="icon-verified" />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Abdulrahman Musaad
        </motion.h1>
        <p className="sub-title">
          I'm a skilled Front-End Developer with experience in HTML, CSS, and
          JavaScript. I excel at crafting clean, responsive code that looks
          great and functions flawlessly across all devices, from desktops to
          smartphones.
        </p>
        <div className="all-icons flex">
          {/* <div className="icon icon-twitter" /> */}
          <a
            className="link flex"
            href="https://twitter.com/abdulra67677700"
            target="_blank"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className="link flex"
            href="https://www.instagram.com/abdulrahman_mosad/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="link flex"
            href="https://github.com/AbdulrahmanMossad?tab=repositories"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="link flex"
            href="https://www.linkedin.com/in/abdulrahman-mosad-9a99471b3/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="right-section animation " style={{ width: "100%" }}>
        <Lottie animationData={developer} style={{ height: 355 }} />
      </div>
      {showModal === true ? (
        <div className=" fixed">
          <div className="large-avatar">
            <a
              className="exit-icon"
              onClick={handelExit}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-xmark exit"></i>
            </a>
            <motion.img
              ref={wrapperRef}
              src="./IMG_2654-modified.png"
              alt=""
              onClick={() => setShowModal(true)}
              className="l-avatar"
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default Hero;
