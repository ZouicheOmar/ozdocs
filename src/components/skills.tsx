/** @format */

import SectionTitle from "./sectionTitle"

import { Inconsolata } from "next/font/google"
const inconsolate = Inconsolata({ subsets: ["latin"], weight: "400" })

const Trow = ({ head, data, last }) => {
  return (
    <tr
      className={`divide-x-[1px] divide-border border-opacity-25 divide-opacity-25 border-border ${!last && "border-b-[1px]"
        } `}
    >
      <th className={`pr-2 text-start  ${inconsolate.className}`}>{head}</th>
      <td className="pl-2">{data}</td>
    </tr>
  )
}

const SKILLS = {
  Frontend: ["React", "Next.js", "Typescript", "Three.js"],
  Backend: ["Node.js", "Python", "Java", "SQL", "MongoDB"],
  Design: ["Figma", "TailwindCSS", "Blender"],
  Tools: ["Git", "GNU/Linux", "NeoVim"],
}

export default function Skills() {
  return (
    <div className="space-y-[8px]" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <table className="w-full ">
        <tbody className=" *:*:py-2 ">
          {Object.keys(SKILLS).map((item, i) => (
            <Trow
              head={item}
              data={SKILLS[item].join(", ")}
              last={i === Object.keys(SKILLS).length - 1}
              key={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
