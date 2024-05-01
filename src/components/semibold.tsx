/** @format */
import {twMerge} from "tailwind-merge"

export default function Semibold({children, className}) {
  return <span className={twMerge("font-semibold", className)}>{children}</span>
}
