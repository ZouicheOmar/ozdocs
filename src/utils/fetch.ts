/** @format */
import {formatDate} from "./format"
import {getUrlFromCommitsUrl} from "./format"

export const getAllCommits = async (projects) => {
  const requests = Object.keys(projects).map((key) =>
    fetch(projects[key].fetch_repo_url).then(async (res) => {
      const json = await res.json()
      json.forEach((item) => {
        const {
          sha,
          html_url,
          commit: {
            committer: {date},
          },
        } = item

        const commit = {
          id: sha.slice(0, 6),
          date: formatDate(date),
          commit_url: html_url,
        }

        Object.keys(projects).forEach((project) => {
          if (projects[project].repo_url === getUrlFromCommitsUrl(html_url)) {
            return projects[project].commits.push(commit)
          }
        })
      })
    })
  )
  await Promise.all(requests)
  return projects
}
