# base-vue

My ideal starting point for Vue projects. (continuously updating)

## Features
- Vue 3 + Typescript: initialized as a Vue 3 project with Typescript support. (also support js)
- ESLint (AirBnB): comes with the AirBnB eslint ruleset for vscode & Vue compiler.
- Class Components: write your Vue components using the new class component.
- Built-in Cypress E2E Testing: out-of-the-box Cypress with support for Vue 3 + Typescript.
- Github Workflow: out-of-the-box Github workflow that runs e2e tests under src/

## Commands

- `yarn test`: opens cypress in Firefox
- `yarn test:chrome`: opens cypress in Chrome
- `yarn lint`: runs the code in src/ through the airbnb eslint ruleset
- `yarn build`: builds the production bundle
- `yarn serve`: runs the dev server