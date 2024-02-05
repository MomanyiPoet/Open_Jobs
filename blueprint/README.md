## OPEN JOBS PROJECT - TEMPLATES

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [HTML + CSS + Tailwind Development](#html-+-css+-tailwind-development)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Introduction
- Open Jobs is a platform where job seekers are able to locate different career opportunites. Showcases different job roles and positions offered by companies, organisations or individuals.

## Process + Development

### HTML + CSS + Tailwind Development
- This section shows the code templates for Msaavy Weather.

```bash
# Create folder blueprint
mkdir blueprint
cd blueprint

# Install tailwindcss via npm, and create your tailwind.config.js file.
npm install -D tailwindcss
npx tailwindcss init
npm i -D daisyui@latest
npm init -y # updates package.json file
```

```bash
# create folder build which contains index.html file
mkdir build
cd build
touch index.html
```

```bash
# Create folder src which contains input.css file, inside the file add Tailwind directives to your CSS.
mkdir src
cd src
touch input.css
```

```css
/* Tailwind directives to your CSS. */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```css
/* Add the paths to all of your template files in your tailwind.config.js file. */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"], /*all html files in the build folder*/
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js
// scan your template files for classes and build your CSS in the package.json file.

// locate the scripts
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},

// change the script to the following
"scripts": {
    "build": "npx tailwindcss -i ./src/input.css -o ./build/assets/css/style.css --watch"
},
```

```bash
# run the script in the terminal
npm run build
```

**DO NOT forget to link the style.css file to your index.html file in the build folder.**

**Additional Resources such as images and favicons are added in folder assets**
**Include a gitignore file with content node_modules, in order not to push the files to github**

**HAPPY CODING**

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)
- [Portfolio Template](https://nyabutibrian.github.io/momanyiBrianPortfolio/blueprints/build/index.html)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Portfolio Website](https://momanyi-brian-portfolio.vercel.app)