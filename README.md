## OPEN JOBS PROJECT

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
    - [Features](#features)
- [Process + Development](#process-+-development)
    - [Figma Design](#figma-design)
    - [HTML + CSS + Tailwind Development](#html-+-css+-tailwind-development)
    - [React Development](#react-development)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Introduction
- Open Jobs is a platform where job seekers are able to locate different career opportunites. Showcases different job roles and positions offered by companies, organisations or individuals.

## Features
- **Open Job Posts**: Admin creates, edits and deletes job posts.
- **Responsive Design**: Ensure a seamless user experience across different devices.
- **API Integration**: Fetch and display data from the Django backend.
- **The website will have an admin interface and user interface**
- Admin inerface allows an authenticated user to create, edit and delete job posts
- The user interface allows all readers to read job posts.
- Job posts will have various categories like: farmer, developer, HR, sponsorships. Each category will have various posts.

## Process + Development

### Figma Design
- This section identifies the figma design for Open Jobs Project:
- Link to Open Jobs - [Figma Design](https://www.figma.com/file/hs5jkCTTbc2Rl0gtRSqt7R/Job-Website?type=design&node-id=0%3A1&mode=design&t=gTiGKwoWEYB315ES-1)

### HTML + CSS + Tailwind Development
- This section identifies the code templates. Templates do not have Javascript functionalitiies and animations.
- The templates are in the folder blueprint.
- Link to Open Jobs - [Open Jobs Template](https://momanyipoet.github.io/Open_Jobs/blueprint/build/)

## React Development
- This section identifies the React code development. The templates have been modified to become reactive. 
- The codes are in the folder frontend.

### Install Node.js
- Node.js installed on your computer. Download it from the official website.

### Creating a React App using Vite

```bash
# Terminal or command prompt.
npm create vite@latest
cd my-project
npm install
npm run dev

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

npm run dev
```

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)


## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)
- Elijah