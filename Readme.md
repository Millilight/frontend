# FEE's Frontend

The frontend for [home.fee.fr](https://home.fee.fr) ([api.fee.fr](https://api.fee.fr)).

The main goals of this frontend application is to provide:

- An helping tool to fill last wishes.
- An helping tool for deceased's relatives (both transmit last wishes + administrative help).
- A complete user management UI as well as a payment management UI.

## Installation

### IDE

You need to use VSCode. With [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins installed. You may need to restart VSCode.

### System dependencies

#### Node.js

You need a **recent** Node.js version (v16.14+ LTS).

You should use [nvm](https://github.com/creationix/nvm).

#### FEE's backend

Needed to provide the data for the application.

Follow installation process [here](https://github.com/L8RMedia/api.thedesktop.io#installation).

### Node Dependencies

Dependencies resolved via npm:

```shell
npm install
```

### Setup script

Needed for various package (i.e. [Husky](#husky)):

```shell
npm run setup
```

#### Runtime Dependencies

Those dependencies are needed for this application to **run**.

Here are the most important ones you should know about:

<a id="typescript" />

##### [Typescript](https://www.typescriptlang.org/)

Our main language. Permits to have the power of JS features in a type-based language so as to compiled it and avoid erros during the runtime.

**Understanding TypeScript is key to master this codebase**

<a id="react" />

##### [React](https://facebook.github.io/react/)

Our main and only UI processing library. React is a well known solution to bring Functional Programming principles into UI development as well as enforcing a clear separation of concerns via components.

**Understanding React is key to master this codebase**

<a id="next" />

##### [`next`](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)

Next is our [React](#react) Framework and helps us to clean our architecture as well as handling some react stuff for us (pre-rendering for instance). We only use it for our frontend.

<a id="apollo-client" />

##### [`apollo-client`](https://www.apollographql.com/docs/react/)

Apollo client is our choice for connecting to our Backend's [GraphQL](http://graphql.org) endpoint.

It is used on top of [Next](#next) and synchronizes GraphQL queries for us.

**Understanding Apollo is key to master this codebase**

##### [`material-ui`](https://mui.com/getting-started/installation/)

Material UI helps us to have out-of-the-box production-ready styled components. Then you can custom them if you like. Under the hood it uses [styled](https://emotion.sh/docs/styled).

#### Development Dependencies

Those dependencies are used for helping with the development but mainly for bundling the application into a compiled application.

<a id="graphql-codegen" />

##### [graphql-codegen](https://www.graphql-code-generator.com/docs/getting-started)

GraphQL code generator generates code from our GraphQL schema and operations. See [this website](https://www.the-guild.dev/blog/graphql-codegen-best-practices) for more details.

##### [esLint](http://eslint.org/)

Code linter.

<a id="prettier" />

##### [prettier](https://prettier.io/docs/en/index.html)

Code formatter. We use eslint's rules.

<a id="husky" />

##### [husky](https://typicode.github.io/husky/)

Checking for errors, linting and formatting on commit.

<a id="lint-staged" />

##### [lint-staged](https://github.com/okonet/lint-staged)

Only check your code when necessary. If you only update a markdown file you don't want to have all your typescripts' one checked.

<a id="jest" />

##### [jest](https://facebook.github.io/jest/)

Powerful testing utility particularly useful with React.

## Configuration

- **The .env.development file** - `.env.development.local` - Describes the env variables used in development environment.
- **The .env.production file** - `.env.production.local` - Describes the env variables used in production environment.
- **The config file** - `src/common/utils/config.js` - Creates a config data structure which can be accessed thoughout the application.

## Run

The application has two running modes:

### Dev runner

```
npm run dev
```

[Next](#next) will automatically load .env.development and set NODE_ENV='DEVELOPMENT'. It then listens on `3000`.

### Prod build runner

```
npm run build
```

[Next](#next) will automatically load .env.production and set NODE_ENV='PRODUCTION'.

Then, start the server:

```
npm run start
```

## Tests

To launch [Jest](#jest) tests:

```
npm run test
```

## GraphQL Code Generator

To update the generated code:

```
npm run codegen
```

## Code Format

To use [Prettier](#prettier) on all the code:

```
npm run format
```

## Contributing

In order to help you contribute to the repository, we provide you two main
tools:

- **Testing** via `npm test`
- **Typechecking** via `npm run typecheck`
- **Linting + Typechecking on all files** via `npm run lint-all`
- **Linting + Typechecking on staged files** via `npm run lint`

### Rules

You can't commit directly on `master`, you should fill Pull Request via Github.

Those must respond to the checklist provided in the template.

### Reporting issues

You are welcome to [report frontend issues here](https://github.com/L8RMedia/home.thedesktop.io/issues/new)!

Follow the template and everything should roll well!

## Repository structure

Here is the repository structure ([here](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472) is the inspiration):

- `.husky/` - [Husky](#husky) script and config file
- `.next/` - [Next](#next) automatic build folder
- `.vscode/` - VScode settings folder
- `public/` - Mainly contains static assets
- `src/` - TypeScript sources
  - `common/` - Sources that are used several times over the application
    - `components/` - Components that are used several times over the application
    - `hooks/` - Hooks that are used several times over the application
    - `types/` - Types that are used several times over the application
    - `utils/` - Utilities that are used several times over the application
      - `config.ts` - Main config file which provides an abstraction of env variable
      - `withApollo.tsx` - Setup [apollo client](#apollo-client)
  - `generated/` - Typescript's types, graphql's operations and fragments as well as React data's components generated  by [graphql code generator](#graphql-codegen)
  - `modules/` - Components grouped by module. High connection between them but low with others
  - `pages/` - Components associated with a route based on its file name
- `styles/` - Global css style folder
- `.babelrc` - Configures Javascript language level
- `.env.development.local` - .env local file in dev environnment
- `.eslintrc.json` - Configures style rules enforced in this codebase
- `.gitignore` - Exclude build/deps/editor/debug artifacts from the repository
- `.prettierrc` - Configures formatter
- `codegen.yml` - Configures [graphql code generator](#graphql-codegen)
- `jest.config.js` - Configures [Jest](#jest) testing
- `jest.setup.ts` - Used for setup [Jest](#jest)
- `lint-staged.config.js` - Configures [lint-staged](#lint-staged)
- `next-env.d.ts` - Generated by [next](#next). This file ensures [next](#next) types are picked up by the TypeScript compiler
- `next.config.js` - Configures [next](#next)
- `package-lock.json` - Automatically generated for any operations where npm modifies either the node_modules tree, or package.json
- `package.json` - JS project manifest. Contains dependencies, scripts to execute, ...
- `README.md` - This file you are currently reading!
- `tsconfig.json` - Configures the [typeScript](#typescript) compilation