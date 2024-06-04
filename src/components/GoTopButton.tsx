/** @format */

"use client"

export default function GoTopButton() {
  return (
    <button
      onPointerDown={() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
      }}
      className="hidden md:block absolute select-none dark:hover:text-white transition-colors cursor-pointer scale-125 -top-10 -right-20"
    >
      ↑
    </button>
  )
}
