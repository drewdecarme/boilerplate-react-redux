# React / Redux Boilerplate

## Table of Contents
  1. [Features](#features)
  2. [Getting Started](#getting-started)
  3. [Guidelines and Examples]()

## Features
#### Javscript
- [React](https://facebook.github.io/react) 
- [React Router](https://reacttraining.com/react-router/)
- [ES6](http://es6-features.org) (with [Babel](https://babeljs.io))
- [Redux](http://redux.js.org/)

#### Internationalization
- [React Intl](https://github.com/yahoo/react-intl)
- [Babel Plugin React Intl](https://github.com/yahoo/babel-plugin-react-intl)

#### Evaluating
- [JS Cookie](https://github.com/js-cookie/js-cookie)
- [Transfonter]()

#### TODO
- [AirBnB React Syntax Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [React Storybook](https://github.com/storybooks/storybook)
  
#### Style
- [Bootstrap 4 (Grid Only)](https://v4-alpha.getbootstrap.com/) Note Style is commented out by default
- [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
- [Babel Plugin React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) used in conjunction with [Sass](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [Post CSS](https://github.com/postcss/postcss)
- [Auto Prefixer](https://github.com/postcss/autoprefixer)

#### Asset Pipeline
- [ESLint](http://eslint.org/) based upon [AirBnB Best Practices](https://github.com/airbnb/javascript/tree/master/linters)
- [Webpack 2](https://webpack.js.org/) based upon a cool ["how to"](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
- [Hot Module Replacement](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.xh6v0ht7j) ([React Hot Loader 3](https://github.com/gaearon/react-hot-loader/issues/243))
- [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)
- [Webpack-dev-server](https://webpack.js.org/how-to/develop/#webpack-dev-server)
- [Gulp](http://gulpjs.com/)
- [Browser Sync](https://www.browsersync.io/)
- [Yarn](https://yarnpkg.com/en/)

#### Plugins


## Getting Started
  1. Clone the repo `git clone`
  2. Enter the working directory `cd boilerplate-react-redux`
  3. Install dependencies `yarn install` (If you don't have yarn installed, you can install it by following the instructions [here](https://yarnpkg.com/lang/en/docs/install/))
  4. Start the solution `yarn start`
  5. A browser window will open with the solution (if it doesn't open, navigate to [http://localhost:3000/](http://localhost:3000))

#### Build Scripts
  1. `yarn start` Starts **development** instance
  2. `yarn preview` Previews the **production** instance
  3. `yarn build` Builds the **production** instance
  4. `yarn storybook` Starts the storybook/component library
  5. `yarn test` Runs all of the tests
  6. `yarn test:auto` Runs all of the test automatically
  7. `yarn lint:js` Lints `.js && .jsx`
  8. `yarn lint:js:fix` Auto fixes `.js && .jsx` errors
  8. `yarn lint:js:help` Displays help for Eslint CLI

## Conventions

### Creating a Component
When adding a new component, it should be symantically named and placed within the `src > app > components` directory. Before it is added to the afore mentioned directory, it sholuld be created within the **stories** directory. Within its new directory, the component should contain 3 files:

  1. `index.jsx` will be the main file which contains the React component code
  2. `index.scss` is the corresponding Sass stylesheet for that component
  3. `index.spec.js` will contain the unit tests for the component

The purpose for repeating the index namespace continually is due to reducing the need to include resolved file extensions defined in both the webpack development and production builds.

### Component Library & Style Guide
The component library utilizes [React Styleguidist](https://react-styleguidist.js.org/) with the projects custom webpack configuration. React Styleguidist is and isolated React component development environment with a living style guide.

Todo
  - [x] Implement Styleguidist
  - [ ] Align Styleguidist config to current Webpack development config
  - [ ] Configure Storybook

### ES6
Module - [Cheat Sheet]()
  - [ ] Fork Custom ES6 Markdown Cheat Sheet

### Responsive Grid System
Module - [Bootstrap 4 Grid](https://v4-alpha.getbootstrap.com/layout/grid/)
  - How to use Grid Component Architecture
  - Add and Create Grid Component
  - Rows
    - [x] Horizontal Alignment [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#horizontal-alignment)
    - [x] Variable Width Content [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#variable-width-content)
    - [x] Vertical Alignment [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)
    - [x] No Gutters [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#no-gutters)
  - Columns
    - [x] Offsetting Columns [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#offsetting-columns)
    - [x] Vertical Self Align [(Docs)](https://v4-alpha.getbootstrap.com/layout/grid/#vertical-alignment)
    - [ ] Markdown Props for the above

### Responsive Text System
Module - [Modularscale Sass](https://github.com/modularscale/modularscale-sass)
  - Uses sass modular scale
  - Mobile first 16px base
  - Desktop 18px base
  - Uses "perfect-fourth" modular scaling system

### Icons
Module - [SVG React Loader](https://github.com/jhamlet/svg-react-loader)
  - SVG React Loader Documentation
  - Sizes & Component Documentation
  - Create Component

### Images
Module - [URL Loader](https://github.com/webpack-contrib/url-loader)
  - URL Loader Documentation
  - Component Documentation
  - Create Component

### Internationalization
Module - [React-intl](https://www.smashingmagazine.com/2017/01/internationalizing-react-apps/)
  - Use `<FormattedMessage></FormattedMessage>` when you need the text to have a span in it
  - Use React-Intl API for just plain text
  - `FormattedMessage` id prop should follow the convention `componentName.idLocaltoComponent`;
  - Document Component

### Unit Testing
Module - [Mocha & Chai || Jasmine]()

### Validation
Module - [TBD]()
  - Choose a Redux Validation Framework
  - Document Validation on Components

### React Middlewear
Module - [TBD]()
 - Documentation TBD

### Cookies
Module - [JSCookie]()
 - [ ] Documentation TBD
