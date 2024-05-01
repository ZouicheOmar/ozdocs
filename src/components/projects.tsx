/** @format */
import ProjectItem from "./projectItem"
import SectionTitle from "./sectionTitle"
import NavigateToArrowIcon from "./icons/navigateToArrowIcon"

import {getAllCommits} from "@/utils/fetch"
import {projects} from "@/utils/constants"

export default async function Projects() {
  const detailedProjects = await getAllCommits(projects)
  return (
    <div className="space-y-[8px] select-none" id="projects">
      <SectionTitle className="font-semibold group space-x-[1px] hover:cursor-pointer max-w-fit">
        <a
          href="https://github.com/ZouicheOmar"
          target="_blank"
          className="group-hover:text-white transition-colors duration-300 group-hover:underline "
        >
          Projects
        </a>
        <NavigateToArrowIcon className="text-white w-[1.1rem] h-[1.1rem]  transition-all duration-300 group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem]  " />
      </SectionTitle>
      <div className="space-y-[16px]">
        {Object.keys(detailedProjects).map((key, index) => (
          <ProjectItem project={detailedProjects[key]} key={index} />
        ))}
      </div>
    </div>
  )
}
