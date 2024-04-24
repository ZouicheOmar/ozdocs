/** @format */
import SectionTitle from "./sectionTitle"
import NavigateToArrowIcon from "./icons/navigateToArrowIcon"
import {error} from "console"

// `https://api.github.com/repos/ZouicheOmar/${repoName}/commits`

const formatDate = (commitDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const time = new Date(commitDate)
  const date = time.getDate()
  const month = months[time.getMonth()]
  const year = time.getFullYear()
  const hours = time.getHours()
  let minutes = String(time.getMinutes())
  //   minutes = String(minutes)
  minutes.length === 1 && (minutes = "0" + minutes)
  return `${month}/${date}/${year} at ${hours}:${minutes}`
}

const getCommits = async () => {
  const commits = []
  await fetch("https://api.github.com/repos/ZouicheOmar/tabloly/commits")
    .then(async (res) => {
      const json = await res.json()
      for (let i = 0; i < json.length; i++) {
        const commit = {
          id: json[i].sha.slice(0, 6),
          date: formatDate(json[i].commit.committer.date),
        }
        commits.push(commit)
      }
    })
    .catch((err) => {
      return error
    })
  return commits
}

export default async function Projects() {
  const commits = await getCommits()
  console.log("commit", commits)
  return (
    <div className="space-y-[8px]">
      <SectionTitle className="font-semibold text-white space-x-1">
        <span>Projects</span>
        <NavigateToArrowIcon />
      </SectionTitle>
      <div className="space-y-[16px]">
        <div className="border-bottom border-b-[#3A3A3A] border-dashed border-b-[1px] pb-[4px]">
          {/** section title */}
          <p className="text-white ">tabloly</p>
          <p>a local browser app to bookmark on table shaped data</p>
          <ul>
            {commits.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item.id}</span>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-bottom border-b-[#3A3A3A] border-dashed border-b-[1px] pb-[4px]">
          {/** section title */}
          <p className="text-white ">messBoard</p>
          <p>a local browser app to bookmark on table shaped data</p>
        </div>
        <div className="border-bottom border-b-[#3A3A3A] border-dashed border-b-[1px] pb-[4px]">
          {/** section title */}
          <p className="text-white ">abroad</p>
          <p>a local browser app to bookmark on table shaped data</p>
        </div>
      </div>
    </div>
  )
}
