/** @format */

export const formatDate = (commitDate: Date) => {
  const time = new Date(commitDate)

  let date = String(time.getDate())
  date.length === 1 && (date = "0" + date)

  let month = String(time.getMonth() + 1)
  month.length === 1 && (month = "0" + month)

  const year = time.getFullYear()

  return `${date}/${month}/${year}`
}

export const getUrlFromCommitsUrl = (url: string) => {
  const split_index = url.indexOf("/commit")
  return url.slice(0, split_index)
}
