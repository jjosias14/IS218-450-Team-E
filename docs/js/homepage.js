{
  "name": "my-school-project",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  },
  // ...
}
