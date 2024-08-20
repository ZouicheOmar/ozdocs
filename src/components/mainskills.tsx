/** @format */

import SectionTitle from "./sectionTitle"

// "Backend: Experienced in serverless applications using Node.js or Python.",

const mainsSkills = [
  "Fluent in French and English",
  "Frontend: React and Typescript for creating responsive and dynamic UIs, ThreeJS for more attractivness.",
  "Backend: RESTful APIs, Serverless.. using Node.js, Python and Java",
  "Programming: JavaScript, Python and C, foundation in logic, data structures and problem solving.",
  "Social: Great communication, confortable in a team or working solo.",
]

export default function MainSkills() {
  return (
    <>
      <div className="space-y-2">
        <SectionTitle>Main Skills </SectionTitle>
        <ul className="relative space-y-2">
          {mainsSkills.map((item, i) => (
            <li
              className="before:content-['→'] before:absolute before:left-0 pl-7"
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
