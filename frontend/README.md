## OPEN JOBS PROJECT - REACT + VITE DEVELOPMENT

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [Install Node.js](#install-node.js)
    - [Creating a React App using Vite](#creating-react-app-using-vite)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Introduction
- This section identifies the React code development. The templates have been modified to become reactive. 


## Process + Development

### Install Node.js
- Node.js installed on your computer. Download it from the official website.

### Creating a React App using Vite

```bash
# Terminal or command prompt.
npm create vite@latest
cd my-project
npm install
npm run dev -- --host

npm install react-router-dom
npm i @vercel/analytics

# Install tailwindcss via npm, and create your tailwind.config.js file.
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest

# Tailwind directives to your CSS.
@tailwind base;
@tailwind components;
@tailwind utilities;

# Add the paths to all of your template files in your tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

npm run dev -- --host
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Author
- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)
- Elijah
