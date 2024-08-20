/** @format */

import SectionTitle from "./sectionTitle"
import Semibold from "./semibold"

export default function About() {
  return (
    <>
      <div className="*:text-pretty space-y-[8px]" id="about">
        <SectionTitle>About me</SectionTitle>
        <p>
          <i className="font-light">Background</i> : I graduated with a degree
          in mathematics from the University of Montpellier. During my Masters,
          I found myself completely engaged in a C++ class, directing all my
          efforts into it whilst leaving the rest. Which led to web development.
        </p>
        <p>
          <i className="font-light">Self-taught </i>: The univesity library was already my
          second home. The majority of my time was spent studying, problem
          solving or discussing math with friends.
        </p>
        <p>
          I heavily relied on myself, which led to improvements in my learning
          skills and organizational abilities.
          <Semibold> I learned how to learn.</Semibold>
        </p>
        <p>
          <Semibold>Following my curiosity</Semibold>, web developement seemed
          to be the best introduction to the programming realm, like for so many
          other self-thaught developers.
        </p>
        <p>
          <Semibold>Through an Internship</Semibold> I can gain field
          experience, practical knowledge and develop a skill set. I want to
          collaborate with professionals, engage in meaningful projects.
        </p>
      </div>
    </>
  )
}
