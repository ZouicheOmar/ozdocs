/** @format */
import {twMerge} from "tailwind-merge"
import {Xanh_Mono} from "next/font/google"

export default function SectionTitle({className, children}) {
  return (
    <p className={twMerge("font-semibold dark:text-white text-lg", className)}>
      {children}
    </p>
  )
}
