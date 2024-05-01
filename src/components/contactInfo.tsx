/** @format */
import CopyToClipboard from "./coptyToClipboard"

export default function ContactInfo() {
  return (
    <div className="md:absolute md:max-lg:right-[1rem] md:max-lg:top-[5rem] right-[5rem] top-[5rem] flex flex-wrap xl:max-w-[500px] md:max-xl:max-w-[400px] gap-x-10 gap-y-4  ">
      <div className="flex flex-col w-fit">
        <span className="">Contact & CV</span>
        <CopyToClipboard
          display="zouiche.omar[at]gmail.com"
          value="zouiche.omar@gmail.com"
          className="text-white"
          type="email"
        />
        <a
          href="./CVozdocs.pdf"
          target="_blank"
          className="cursor-pointer text-white after:content-['↗'] after:opacity-0 after:hover:opacity-100 after:transition-opacity"
        >
          resume.pdf
        </a>
      </div>
      <div className="flex flex-col  w-fit">
        <span className="">Github</span>
        <a
          className="cursor-pointer text-white after:content-['↗'] after:opacity-0 after:hover:opacity-100 after:transition-opacity"
          href="https://github.com/ZouicheOmar/"
          target="_blank"
        >
          @ZouicheOmar
        </a>
      </div>
      <div className="flex flex-col  w-fit">
        <span className="">Linkedin</span>
        <a
          className="cursor-pointer text-white after:content-['↗'] after:opacity-0 after:hover:opacity-100 after:transition-opacity"
          href="https://www.linkedin.com/in/ZouicheOmar/"
          target="_blank"
        >
          @ZouicheOmar
        </a>
      </div>
      <div className="flex flex-col  w-fit">
        <span className="">Location</span>
        <span className="text-white">Toulouse</span>
      </div>
    </div>
  )
}
