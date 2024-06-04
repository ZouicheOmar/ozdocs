/** @format */
import SectionTitle from "./sectionTitle"

function EducationItem({title, year, location}) {
  return (
    <div className="border-bottom dark:border-b-[#3A3A3A] border-dashed border-b-[1px] pb-[4px]">
      <div className="w-full flex justify-between">
        <span className="font-medium dark:font-normal dark:text-white ">{title}</span>
        <span>{year}</span>
      </div>
      <p className="leading-tight">{location}</p>
    </div>
  )
}

export default function Education() {
  return (
    <div className="space-y-[8px]" id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-[16px]">
        <EducationItem
          title="CPGE Technologies et Sciences Industrielles"
          year="2017/2018"
          location="Lycée Léonce Vieljeux - Université de La Rochelle"
        />
        <EducationItem
          title="Mathematics Licence"
          year="2018/2021"
          location="Facuté des Sciences - Université de Montpellier"
        />
        <EducationItem
          title="Master 1 Modélisation et Analyse Numérique"
          year="2021/2022"
          location="Facuté des Sciences - Université de Montpellier"
        />
        <EducationItem
          title="Developpement Web"
          year="Current"
          location="OpenClassrooms"
        />
      </div>
    </div>
  )
}
