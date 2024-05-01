/** @format */
import {formatDate} from "@/utils/format"
import {Inconsolata} from "next/font/google"
import GoTopButton from "./GoTopButton"

const inconsolata = Inconsolata({subsets: ["latin"], weight: "400"})

const url = "https://api.github.com/repos/ZouicheOmar/ozdocs/commits"
const getLastCommit = async (url) => {
  const reponse = await fetch(url)
  const commits = await reponse.json()
  const latest = commits[0]
  let {
    sha,
    commit: {
      committer: {date},
    },
    html_url,
  } = latest
  date = formatDate(date)
  sha = sha.slice(0, 6)
  return {sha, date, html_url}
}

export default async function Footer() {
  const {sha, date, html_url} = await getLastCommit(url)

  return (
    <footer className="w-full relative before:content-[':)'] before:absolute before:-top-[10rem] before:left-1/2 before:rotate-90 before:scale-125  border-t-[1px] border-border border-dashed pb-16 md:pb-6 pt-2 md:pt-6 mt-40">
      <p className={`text-center text-sm ${inconsolata.className}`}>
        Updated : {date}
        <a
          href={html_url}
          target="_blank"
          className={`relative after:content-['↗'] after:absolute after:-right-4 after:opacity-0 after:hover:opacity-100 after:transition-all after:duration-500`}
        >
          {" "}
          [{sha}]
        </a>
      </p>
      <GoTopButton />
    </footer>
  )
}
