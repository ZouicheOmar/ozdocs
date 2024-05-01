/** @format */

import Image from "next/image"

/** @format */

export default function Illustration({alt, src, description}) {
  return (
    <div className="flex flex-col mt-20 justify-center items-center gap-1 w-full ">
      <Image src={src} alt={alt} width={300} className="rounded-md" />
      <span className="text-xs">{description}</span>
    </div>
  )
}
