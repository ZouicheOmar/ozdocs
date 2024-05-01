/** @format */
import {formatDate} from "./format"
import {getUrlFromCommitsUrl} from "./format"

export const getCommits = async (repo) => {
  const commits = []
  const url = repo + "/commits"
  // await fetch(url)
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
