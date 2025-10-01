# Landing Page Template built with Next JS 14+, Tailwind CSS 3 and TypeScript

<p align="center">
  <a href="https://creativedesignsguru.com/demo/nextjs-landing-page/"><img src="public/assets/images/nextjs-landing-page-banner.png?raw=true" alt="Next js starter banner"></a>
</p>

🚀 A landing page starter template for Next.js, Tailwind CSS, and TypeScript. Made with developer experience first and ready to be deployed on Netlify.

Check out our [live demo](https://creativedesignsguru.com/demo/nextjs-landing-page/).

### Features

- 🔥 [Next.js](https://nextjs.org) for Static Site Generation
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 PostCSS for processing Tailwind CSS
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks & Lint-staged for running linters on staged files
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One-click deployment with Netlify
- 🌈 Includes a FREE theme
- 💯 Maximize lighthouse score

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `utils/AppConfig.ts`: configuration file

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified. It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
