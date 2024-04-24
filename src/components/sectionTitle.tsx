/** @format */
import {twMerge} from "tailwind-merge"

export default function SectionTitle({className, children}) {
  return (
    <p className={twMerge("font-semibold text-white text-lg", className)}>
      {children}
    </p>
  )
}
