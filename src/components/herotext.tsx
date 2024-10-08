/** @format */
import { Xanh_Mono } from "next/font/google"
const xanh = Xanh_Mono({ subsets: ["latin"], weight: "400" })

const text = {
  job: "Aspiring Fullstack Developer",
  desc: "Focused on simple and efficient UI & UX solutions for the web",
}

export default function HeroText() {
  return (
    <div>
      <p className="font-medium dark:text-[#0BD8B6] text-2xl md:text-3xl">
        Omar Zouiche
      </p>
      <p
        className={`${xanh.className} italic dark:text-white  text-3xl md:text-5xl`}
      >
        {text.job}
      </p>
      <p className="pt-1 md:leading-[2.2rem] font-medium dark:font-light  opacity-75 dark:opacity-50">
        {text.desc}
      </p>
    </div>
  )
}
