import { useState } from "react"
import "./main.css"
import { myProjects } from "./myProjects"
import { AnimatePresence, motion } from "framer-motion"

// ########################### using framer-motion for animation ##############################################3
const Main = () => {
  const [current, setCurrent] = useState("all")
  const [projects, setProjects] = useState(myProjects)
  const handelClick = (inp) => {
    setCurrent(inp)
    if (inp === "all") {
      setProjects(myProjects)
      return
    }
    // const newArr=myProjects.filter((x)=>{
    //   const j=x.category.find((y)=>y===inp)
    //   return j
    // })
    const newArr = myProjects.filter((item) =>
      item.category.toString().includes(inp)
    )
    setProjects(newArr)
  }

  return (
    <main className="flex">
      <section className="left-section ">
        <button
          onClick={() => handelClick("all")}
          className={current === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handelClick("mern")}
          className={current === "mern" ? "active" : null}
        >
          Mern Stack
        </button>
        <button
          onClick={() => handelClick("html")}
          className={current === "html" ? "active" : null}
        >
          Html-css-js
        </button>
        <button
          onClick={() => handelClick("mui")}
          className={current === "mui" ? "active  " : null}
        >
          React-MUI
        </button>
        <button
          onClick={() => handelClick("tail")}
          className={current === "tail" ? "active  " : null}
        >
          React-TailWind
        </button>
        <button
          onClick={() => handelClick("bootstrap")}
          className={current === "bootstrap" ? "active  " : null}
        >
          React-BootStrap
        </button>
        {/* <button
          onClick={() => handelClick("next")}
          className={current === "next" ? "active  " : null}
        >
          React-NextJs
        </button> */}
      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {projects.map((item, index) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                className=" card"
                key={index}
              >
                <img
                  src={item.imgPath}
                  alt=""
                  style={{ width: "100%", height: "50%" }}
                />
                <div
                  className="box"
                  style={{
                    width: "100%",
                    height: "50%",
                    textAlign: "justify",
                    padding: "10px",
                  }}
                >
                  <h1 className="title  ">{item.title}</h1>
                  <p className="sub-title m-0">
                    {item.projectTitle} <br />
                    {item.desc}
                  </p>
                  <p className="sub-title"></p>
                  <div className="flex icons ">
                    <div className="flex " style={{ gap: "11px" }}>
                      <a
                        className="link flex"
                        href={item.proLink}
                        target="_blank"
                      >
                        <i className="fa-regular fa-eye"></i>
                      </a>
                      <a
                        className="link flex"
                        href={item.githubLink}
                        target="_blank"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                      {/* <div className="icon-github" />  */}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
export default Main
