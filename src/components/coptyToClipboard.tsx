/** @format */
"use client"

import {useState} from "react"
import {twMerge} from "tailwind-merge"

export default function CopyToClipboard({display, value, className, type}) {
  const [copied, setCopied] = useState(false)
  const [hideToolTip, setHideTooltip] = useState(false)
  return (
    <>
      <button
        className={twMerge(
          `relative group  space-x-1 dark:hover:text-white  transition-colors`,
          className
        )}
        onPointerDown={async () => {
          navigator.clipboard.writeText(value).then(() => {
            setCopied(true)
            setTimeout(() => {
              setCopied(false)
              setHideTooltip(true)
            }, 700)
            setTimeout(() => {
              setHideTooltip(false)
            }, 2000)
          })
        }}
      >
        <span>{display}</span>

        {!hideToolTip && (
          <span
            className={`absolute ${copied && "w-[6rem]"} ${
              type === "url" && "w-[5rem]"
            }   -top-[80%] left-1/2 -translate-x-1/2  px-1 bg-border rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300`}
          >
            {copied
              ? type === "url"
                ? "url copied!"
                : "email copied!"
              : type === "url"
              ? "copy url"
              : "copy email"}
          </span>
        )}
      </button>
    </>
  )
}
