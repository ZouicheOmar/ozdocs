/** @format */
import photo from "../../public/photo.png"
import Image from "next/image"
import {Jacquard_24} from "next/font/google"

const jac = Jacquard_24({subsets: ["latin"], weight: "400"})

export default function Profile() {
  return (
    <div className="flex gap-2">
      <div className="relative w-[100px] ">
        <Image src={photo} alt="Me" quality={100} className="rounded-[12px]" />
        <span
          className={`${jac.className} opacity-[0.01] hover:opacity-5 transition-opacity  select-none text-6xl absolute -top-[4px] left-[108px]  leading-[42px]  `}
        >
          oz Docs
        </span>
      </div>
      <div className="absolute min-w-fit rounded-full bg-[#121113] p-[6px] translate-y-[87px] translate-x-[87px] flex gap-1 align-content-center">
        <span className="relative flex h-3 w-3  ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="min-w-[120px] texf-start  leading-none">
          Available for work
        </p>
      </div>
      <div className=""></div>
    </div>
  )
}
