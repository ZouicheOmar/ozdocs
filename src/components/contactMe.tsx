/** @format */

import SectionTitle from "./sectionTitle"
import CopyToClipboard from "./coptyToClipboard"

export default function ContactMe() {
  return (
    <div
      id="connect"
      className="space-y-2 border-b-[px] border-border border-dashed pb-10"
    >
      <SectionTitle>Contact me</SectionTitle>
      <div className="flex flex-wrap justify-between">
        <a
          className="after:content-['↗'] after:pl-1  hover:text-white transition-colors"
          href="mailto:zouiche.omar@gmail.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          email
        </a>
        <CopyToClipboard
          display="zouiche.omar[at]gmail.com"
          value="zouiche.omar@gmail.com"
          type="email"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <a
          className="after:content-['↗'] after:pl-1 hover:text-white transition-colors"
          href="https://www.linkedin.com/in/ZouicheOmar/"
          target="_blank"
        >
          linkedin
        </a>
        <CopyToClipboard
          display="@ZouicheOmar"
          value="https://www.linkedin.com/in/ZouicheOmar/"
          type="url"
        />
      </div>
    </div>
  )
}
