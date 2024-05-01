/** @format */

type Commit = {
  id: string
  date: string
  commit_url: string
}

type Project = {
  repo_name: string
  display_name: string
  repo_url: string
  fetch_repo_url: string
  description: string
  commits: Commit[]
}

export const projects = {
  tabloly: {
    repo_name: "tabloly",
    display_name: "tabloly",
    repo_url: "https://github.com/ZouicheOmar/tabloly",
    fetch_repo_url: "https://api.github.com/repos/ZouicheOmar/tabloly/commits",
    description: "a browser local  app to bookmark on data inside tables",
    stack: ["next.js", "shadcn/ui", "zustand", "node.js"],
    commits: [],
  },
  messBoard: {
    repo_name: "lambdino",
    display_name: "Mess Board",
    repo_url: "https://github.com/ZouicheOmar/lambdino",
    fetch_repo_url: "https://api.github.com/repos/ZouicheOmar/lambdino/commits",
    description:
      "a browser app to save text, code snippets, urls and images freely on a canvas, no tidy required",
    stack: ["react", "framer", "zustand", "aws S3", "aws dynamodb"],
    commits: [],
  },
  grunted: {
    repo_name: "grunted",
    display_name: "ozdocs v0",
    repo_url: "https://github.com/ZouicheOmar/grunted",
    fetch_repo_url: "https://api.github.com/repos/ZouicheOmar/grunted/commits",
    description: "first iteration of my personal website",
    stack: ["react", "vite", "tailwindcss"],
    commits: [],
  },
  abroad: {
    repo_name: "abroad-vite",
    display_name: "abroad",
    repo_url: "https://github.com/ZouicheOmar/abroad-vite",
    fetch_repo_url:
      "https://api.github.com/repos/ZouicheOmar/abroad-vite/commits",
    description: "@EINs website prototype, fully functionning [aborted]",
    stack: [
      "vite with react",
      "vercel",
      "supabase for : auth, sql database, storage bucket",
      "stripe",
    ],
    commits: [],
  },
}
