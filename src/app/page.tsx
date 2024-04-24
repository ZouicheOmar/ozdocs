/** @format */
import Image from "next/image"
import photo from "../../public/photo.png"
import SectionTitle from "@/components/sectionTitle"
import NavigateToArrowIcon from "@/components/icons/navigateToArrowIcon"
import Projects from "@/components/projects"

const About = () => (
  <div className="space-y-[8px]">
    <SectionTitle>About me</SectionTitle>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
      Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
      ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
      quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
      interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum
      sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis
      orci ut diam condimentum, vel euismod erat placerat.{" "}
    </p>
    <span className="text-[#0BD8B6]">resume.pdf</span>
  </div>
)

const Now = () => (
  <div className="space-y-[8px]">
    <SectionTitle className="text-[#FF0000]">Now</SectionTitle>
    <p className="text-[#FF0000]">
      Currently looking for an internship as a web developer in France
    </p>
  </div>
)

const Education = () => (
  <div className="space-y-[8px] ">
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
        title="CPGE Technologies et Sciences Industrielles"
        year="Current"
        location="OpenClassrooms"
      />
    </div>
  </div>
)

const ContactInfo = () => (
  <div className="md:absolute md:max-lg:right-[1rem] md:max-lg:top-[5rem] right-[5rem] top-[5rem] flex flex-wrap md:max-w-[500px] md:max-lg:max-w-[400px] gap-x-10 gap-y-4  ">
    <div className="flex flex-col w-fit">
      <span className="">Contact & CV</span>
      <span className="text-white">zouiche.omar[at]gmail.com</span>
      <span className="text-white">resume.pdf</span>
    </div>
    <div className="flex flex-col  w-fit">
      <span className="">Github</span>
      <span className="text-white">@ZouicheOmar</span>
    </div>
    <div className="flex flex-col  w-fit">
      <span className="">Linkedin</span>
      <span className="text-white">@ZouicheOmar</span>
    </div>
    <div className="flex flex-col  w-fit">
      <span className="">Location</span>
      <span className="text-white">Toulouse</span>
    </div>
  </div>
)

const Skills = () => (
  <div className="space-y-[8px]">
    <SectionTitle>Skills</SectionTitle>
  </div>
)

const Footer = () => (
  <div className="mx-auto mt-20">
    <span>last updated : d4fa9ee, last week</span>
  </div>
)

const ProfilePhoto = () => (
  <div className="flex gap-2">
    <div className="relative w-[100px] ">
      <Image src={photo} alt="Me" quality={100} className="rounded-[16px]" />
    </div>
    <div className="absolute min-w-fit  translate-y-[88px] translate-x-[90px] flex gap-1 align-content-center">
      <div className="animate-battement">
        <div className="absolute w-[0.80rem] h-[0.8rem] rounded-full bg-[#2BD327] top-[0.1rem] left-[0.1rem] shadow-md  "></div>
        <div className=" w-[1rem] h-[1rem]  rounded-full bg-white"></div>
      </div>
      <p className="min-w-[120px] texf-start pt-[2px] leading-none">
        Available for work
      </p>
    </div>
    <div className=""></div>
  </div>
)

const HeroText = () => (
  <div className=" ">
    <p className="font-medium text-[#0BD8B6] text-2xl md:text-3xl">
      Omar Zouiche
    </p>
    <p className="font-light text-white text-3xl md:text-5xl">Web developer</p>
    <p className="md:leading-[2.2rem] ">Focused on frontend development </p>
  </div>
)

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-3 md:p-24 lg:pb-5 flex justify-center text-sm">
        <div className="max-w-[560px] flex flex-col gap-[40px]">
          <ProfilePhoto />
          <ContactInfo />
          <HeroText />
          <Now />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Footer />
        </div>
      </main>
    </>
  )
}

function EducationItem({title, year, location}) {
  return (
    <div className="border-bottom border-b-[#3A3A3A] border-dashed border-b-[1px] pb-[4px]">
      <div className="w-full flex justify-between">
        <span className="text-white ">{title}</span>
        <span>{year}</span>
      </div>
      <p className="leading-tight">{location}</p>
    </div>
  )
}
