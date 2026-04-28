import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_REPOSITORY is set automatically by GitHub Actions as "owner/repo-name"
// We extract just the repo name for the base path on GitHub Pages.
// Locally (no env var) we use '/' so dev server works normally.
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base: repoName,
})
