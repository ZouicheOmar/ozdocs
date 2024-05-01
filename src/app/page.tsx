/** @format */
import Projects from "@/components/projects"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import ContactMe from "@/components/contactMe"
import Navigation from "@/components/navigation"
import ContactInfo from "@/components/contactInfo"
import Footer from "@/components/footer"
import Profile from "@/components/profile"
import HeroText from "@/components/herotext"
import Now from "@/components/now"
import MainSkills from "@/components/mainskills"
import ColorsBadge from "@/components/colorbadge"

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen p-3 md:p-24 md:pb-10  flex justify-center text-">
        <div className="max-w-[560px] flex flex-col gap-[40px]">
          <Navigation />
          <Profile />
          <ContactInfo />
          <HeroText />
          <About />
          <Now />
          <a
            href="./CVozdocs.pdf"
            target="_blank"
            className="group text-[#0BD8B6]/80 hover:text-[#0BD8B6] transition-colors cursor-pointer after:content-['↗'] after:pl-1 "
          >
            <span>resume.pdf</span>
          </a>
          <MainSkills />
          {/* <Projects /> */}
          <Education />
          <Skills />
          <ContactMe />
          <Footer />
          <ColorsBadge />
        </div>
      </main>
    </>
  )
}
