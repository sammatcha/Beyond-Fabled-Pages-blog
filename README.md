# Astro-Sanity Blog

1. [What and Why](#what-and-why) <br>
2. [Setup](#setup)<br>
   -  [Technology](#technology)
3. [Configurations](#configurations)
   - [Project Structure](#project-structure)
4. [Usage](#usage)
   - [Commands](#commands)
5. [Troubleshooting](#troubleshooting)
   - [Image not rendering issue](#image-not-rendering-issue)
6. [Resources](#resources)
   - [Credits](#credits)

## What and Why
This is a tentative Astro-Sanity blog of all things that I enjoy. I have always wanted to start one up, so here we are.

## Setup
```sh
npm create astro@latest
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

### Technology
Astro, Sanity(tentative), React, TailwindCSS

## Configurations
### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

 `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.


# Usage
##  Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |

# TroubleShooting
## Image not rendering issue
 added '?url' in the image import
   - image was placed in src directory and not public<br/>

Page refresh / render shows mobile nav icon when it shouldn't when clicking through nav items
   - changed `client:load ` to `client:only="react"` in the Nav component in main-layout.astro file<br/>

Page refresh looks clunky
   - Import and add the <ViewTransitions /> component to main-layout.astro file 
  
 ## Sanity CLI not working
 Sanity would not create when using quick start installation.

```
npx sanity@latest logout && npm create sanity@latest -- --project cw1h8gpf --dataset production --template clean
```





# Resources
Feel free to check [our documentation](https://docs.astro.build)

View Transitions [here](https://docs.astro.build/en/guides/view-transitions/#full-site-view-transitions-spa-mode)

Client directives [here](https://docs.astro.build/en/reference/directives-reference/#client-directives)

## Credits
- Image created using Canva.


