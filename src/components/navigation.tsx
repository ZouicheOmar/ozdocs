/** @format */
"use client"
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import HamburgerMenuIcon from "./icons/hamburgerMenuIcon"
import ArrowUpIcon from "./icons/ArrowUpIcon"
import NavigateToArrowIcon from "./icons/navigateToArrowIcon"
import CrossIcon from "./icons/crossIcon"

export default function Navigation() {
  const [show, setShow] = useState(false)

  const handlePointerDown = (section) => {
    document.getElementById(section).scrollIntoView({behavior: "smooth"})
    setTimeout(() => {
      setShow(false)
    }, 600)
  }
  return (
    <>
      <AnimatePresence>
        {show && (
          <div
            onWheel={() => setShow(false)}
            onPointerDown={(e) => {
              e.stopPropagation()
              setShow(false)
            }}
            className="fixed backdrop-blur blurred-menu z-10 w-screen h-full top-0 left-0 animate-in fade-in-50  "
          />
        )}
      </AnimatePresence>
      <div className="overflow-hidden z-20  md:hidden bg-white dark:bg-[#121113] border-t-2 dark:border-t-border/25 dark:border-t-[1px] w-full p-2 fixed bottom-0 left-0 ">
        <div className="flex justify-end p-1 px-2 ">
          <button
            className={`flex items-center gap-1 ${
              show && "dark:text-white"
            } transition-colors duration-300`}
            onPointerDown={() => setShow(!show)}
          >
            <span className="">Navigation</span>
            {show ? <CrossIcon /> : <HamburgerMenuIcon className="stretch" />}
          </button>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              className="z-20"
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "fit-content"}}
              exit={{opacity: 0, height: 0}}
            >
              <ul className="select-none space-y-4 p-2 pt-1 ">
                {/* <div className=" max-h-[0px] w-full border-t-[1px] border-[#3a3a3a]"></div> */}
                <li
                  className="active:text-white w-fit transition-colors"
                  onPointerDown={() => handlePointerDown("about")}
                >
                  About
                </li>
                <li
                  className="active:text-white w-fit transition-colors"
                  onPointerDown={() => handlePointerDown("projects")}
                >
                  Projects
                </li>
                <li
                  onPointerDown={() => handlePointerDown("education")}
                  className="active:text-white w-fit transition-colors"
                >
                  Education
                </li>
                <li
                  className="active:text-white w-fit transition-colors"
                  onPointerDown={() => handlePointerDown("skills")}
                >
                  Skills
                </li>
                <li onPointerDown={() => handlePointerDown("connect")}>
                  Connect
                </li>
                <div className="  max-h-[0px] w-full border-t-[1px] border-[#3a3a3a]"></div>
                <li
                  className=" active:text-white w-fit transition-colors"
                  onPointerDown={() => {
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                    setTimeout(() => {
                      setShow(false)
                    }, 600)
                  }}
                >
                  <a href="./CVozdocs.pdf" target="_blank">
                    resume.pdf
                  </a>
                  <NavigateToArrowIcon />
                </li>
                <div className=" max-h-[0px] w-full border-t-[1px] border-[#3a3a3a]"></div>

                <li
                  className="flex group  active:text-white  transition-colors  justify-end items-end gap-1"
                  onPointerDown={() => {
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                    setTimeout(() => {
                      setShow(false)
                    }, 600)
                  }}
                >
                  <span>go to top</span>
                  <ArrowUpIcon className="group-active:-translate-y-[2px] transition-transform" />{" "}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
