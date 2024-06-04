/** @format */
"use client"

import {useState} from "react"

import {motion, AnimatePresence} from "framer-motion"
import TriangleDownIcon from "./icons/triangleDownIcon"
import NavigateToArrowIcon from "./icons/navigateToArrowIcon"
import {Inconsolata} from "next/font/google"

const inconsolate = Inconsolata({subsets: ["latin"], weight: "300"})

export default function ProjectItem({project}) {
  const {display_name, repo_url, commits, description, stack} = project
  const [open, setOpen] = useState(false)

  return (
    <div className="border-bottom dark:border-b-[#3A3A3A]  border-dashed border-b-[1px] pb-[4px]">
      <div className="pb-1">
        <div className="flex justify-between ">
          {open ? (
            <a
              href={repo_url}
              target="_blank"
              className="dark:text-white hover:text-teal-300 transition-colors duration-300"
            >
              <span>{display_name}</span>
              <NavigateToArrowIcon
                className="animate-in slide-in-from-top-1 duration-75"
              />
            </a>
          ) : (
            <span className="font-medium dark:font-normal dark:text-white">{display_name}</span>
          )}

          <span onPointerDown={() => setOpen(!open)}>
            <TriangleDownIcon
              className={` cursor-pointer dark:hover:text-white ${
                open && "rotate-180"
              } transition-transform duration-300`}
            />
          </span>
        </div>
        <p>{description}</p>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "fit-content"}}
            exit={{opacity: 0, height: 0}}
            className="flex w-full gap-4 p-x-1 divide-x-[1px] divide-dashed dark:divide-[#3a3a3a]"
          >
            <div className="w-1/2">
              <p className="py-2 border-b-[1px] border-dashed dark:border-b-[#3a3a3a]">
                commits
              </p>
              <ul
                className={`font-mono py-2 select-none ${inconsolate.className}`}
              >
                {commits.map((item, i) => {
                  if (commits.length >= 4) {
                    if (i > 3 && i < commits.length) {
                      return
                    }
                    if (i === 1) {
                      return (
                        <li key={i} className=" leading-none">
                          ... <br /> ... <br /> ...
                        </li>
                      )
                    }
                    return (
                      <li key={i} className="flex justify-between">
                        <a
                          href={item.commit_url}
                          className="dark:hover:text-white transition-colors"
                          target="_blank"
                        >
                          {item.id}
                        </a>
                        <span>{item.date}</span>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
            <div className="w-1/2 pl-3">
              <p className="py-2 border-b-[1px] border-dashed dark:border-b-[#3a3a3a]">
                stack
              </p>{" "}
              <ul
                className={`font-mono py-2 select-none  ${inconsolate.className}`}
              >
                {stack.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
