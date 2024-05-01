/** @format */

import SectionTitle from "./sectionTitle"

const mainsSkills = [
  "Fluent in French and English",
  "Frontend: React and  Typescript for creating responsive and dynamic UIs.",
  "Backend: Experienced in serverless applications using Node.js or Python.",
  "Programming: JavaScript and Python, foundation in logic and problem solving.",
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
