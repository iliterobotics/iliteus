# ILITE
This is the ILITE website code repository, powered by React, Gatsby, GraphQL, and Contentful. This page will describe the overall site 

****

#### Buzzwords
This team (and this guide) will often use buzzwords that you should know before working on the rest of the website. 

* *HTML5* - There are different version of HTML, and like most sites, we use the latest standard. This includes the `nav`, `article`, `section`, etc.
* *CSS3* - Similar to HTML, there are different versions of CSS, and we use this as the baseline for our styles.
* *CSS4* - This is the unofficial name of the latest release of CSS. The new version of CSS includes things such as grid layouts, variables, and selectors.
* *LESS* - In simple terms, this is a more dynamic version of CSS. Unlike in CSS3, we can use conditional structures such as for loops and if statements, nest selectors, and use variables.
* *Browser Support* - Some browsers do not support our advanced use of JavaScript, most notably Internet Explorer. This is simply our way of making sure that we don't accdidentally lose support for a browser by implementing a certain feature.
* *React* - This is our way of making our website dynamic and create reusable components.
* *JSX* - React's way of allowing us to implement HTML inside JavaScript files.
* *Components* - These are parts of the site that we can reuse, or supply parameters. For example, the navbar, footer, and banners are among the dozens of reusable components. 
* *State* - We use state to affect the actions of components based on conditions that we supply.
* *Props* - We can supply properties to React components to define actions of the component based on the properties supplied to it. Unlike state, we pass these props externally instead of internally.
* *Stateless Functional Components* - These components make up the majority of all the components. They do not have state, and only use props.
* *Stateful Components* - These components use state to make internal decisions within the component.
* *Content Management System (CMS)* - This is our way of editing the website by using text areas and input boxes without having to dive into the code, ensuring that those without a code based background do not have to edit with the code. We will be using Contentful as our CMS this year.
* *ES6* - Similar to how HTML and CSS have standards, JavaScript has a variety of versions that come out annually. The codebase is written entirely using ES6 syntax - this means we use `const`/`let`, destructuring, imperative programming, and other syntax.

***

### Getting Started
If you contributing to this repo, then you are most likely a member of the ILITE Robotics team. To contribute to this repository, you need to have a text editor. We recommend Visual Studio Code and Atom.

If you are contributing to this repository, then you need to have a few other tools that you need to have installed.
* NodeJS - server side javascript
* NPM - node package manager
* Yarn - a superior package manager
* Git Bash - a Linux style terminal
* Gatsby - the platform 

To install [NodeJS](https://nodejs.org/en/), head to their website and select the latest version that fits your operating system. The installer will install both NodeJS and the NPM package manager. This repository doesn't use NodeJS, but we do use NPM scripts very frequently. We will use NPM as a method of building the project and running development servers.

To install [Yarn](https://yarnpkg.com/en/), install the executable from their website. We consider Yarn to be a superior package manager because of its speed and consistency, but we install NPM anyway because Yarn relies on NodeJS.

We also use the terminal very frequently. If you are on Windows, then install [Git Bash](https://git-scm.com/downloads). If you are on Mac, then the default terminal is fine. Having either of these terminals allows you to run some of the Linux styled commands, which are invaluable when coding. These include `ls` and `rm -rf`.

To install [Gatsby](https://www.gatsbyjs.org/), run the following command in your terminal.
```
yarn install --global gatsby-cli
```
This is the platform we will build our website on. 


