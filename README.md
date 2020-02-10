# Everything:

## Setup

> https://github.com/tj/n

sudo n 10.15.3

> https://yarnpkg.com/en/docs/install#mac-stable

> git clone git@github.com:kauri-io/kauri-serverless-migration.git

cd app && yarn

yarn global add now

now login; Ask Davide for rest of this 0_o

now dev;
open localhost:3000

> Extra

- Redux devtools browser extension
- Apollo browser extension

## Folder structure

Parental root is only for accessing deploy commands like yarn deploy-dev or yarn deploy-prod

> app/\*.\* = Config files

> config/ = development vs production, please also create other configuration files e.g. uppy which is our image plugin

> queries/ = Graphql queries + mutations + \_\_generated\_\_ TS interfaces

> pages/ = Top level file system api routes, please use with now.json for nested routes + params (Davide is better at explaining this than I am)

- \_app.tsx = Async raw JS scripts here like Mailchimp, think of this as a page route component wrapper
- \_document.tsx = HTML Document structure, this is the entry point for getInitialProps()

  > https://nextjs.org/learn/basics/fetching-data-for-pages

  Usually actually only used for CSS SSR

- \_error.tsx
  > Err this is supposed to be the 404 which needs to be enabled for Zeit Now lol

> scripts = Node.js scripts like introspection of the GQL API

> types = Global typescript module declarations that do not have third party ones

> layouts = One level down from \_document, essentially the Application semantic structure - Navbar, Content, Footer

> containers/ vs components/

- Application + Stateful components === Containers e.g. Forms, Terms of use, Discover

Folder structure is MVC style :- index.tsx View.tsx Module.ts

View is also split. Actions, Header, Content etc.

- Everything else stateless and context resusable === components e.g. Cards, Buttons

  **Very philosophical**

## Architecture

SSR = Serverside rendered

> Actually a headache

tl;dr - Context request comes in, node.js creates an html string, responds with that html

Browser runs JS bundle on top of that html response and React finds no diff = Fast initial render + SEO + Universal/Reusable server and client code

Add in CSS-in-JS to the mix

Next.js is a complete React framework that is less config heavy to handle SSR, async page bundles, non-js file handling, routing + also has Zeit hosting integrated with it because they created it

1 - Raw request accessible via lib/with-data, this is the page wrapper
2 - Reads cookies, fetches user details, sets redux data store + apollo client + backend page data for that page and passes that to the page component, aggregates all css thus exploding the universe

Essentially \_app.tsx, \_document.tsx and lib/with-data.tsx all work in unison

## CSS

Prior used styled-components, now converting to material-ui

There's a theme object tied to the constraints of our design system context injected at the top level provided in with-data.

Only difference now is string interpolation => object style

`const classes = theme => createStyle(componentStyleObject)`

`<Button className={classes.button}>`

tl;dr Ask Davide

## Business logic

Redux Observable middleware by Netflix essentially is RxJS Operators + Redux

tl;dr - Each epic middleware allows dependency injection, event dispatching and side effect management.

(Redux = global state store + Pure functional event dispatcher lib)

lib/root.ts - Array of business logic "epics"

> containers/Community/Module.tsx

- Notice the colocated \*Epic.test.tsx files
- Each Module file per container contains all the redux specific stuff - actions, epics, reducers

```
interface IAction {
  type: 'EVENT_NAME'
  payload: IMPORTED_GENERATED_MUTATION_INTERFACE
}
```

> Action functions are imported into the index.ts files of the containers to bind the redux dispatch instance to them accessible via this.props.ACTION_NAME in View.tsx

(Handful sorry but this is standard in frontend, ask Kendall lol :( )

tl;dr - Epics are obsercables that listen to the redux store for dispatched events, activate if match, do web3 personal sign, apollo client graphql mutations, clear apollo store cache and dispatch more actions like showNotificationAction()

## Queries + Type Introspection

Folder is separated by resource and reusable fragments and are scanned via the `yarn gqt` command to introspect against the backend to generate TS interfaces.

We now have a graphiql playground for documentation + REPL, consult Greg for this :))

## Tests

Unit test = Mocked Components snapshots + Enzyme

> https://airbnb.io/enzyme/docs/

Epic unit tests

## API Route File system

Refer to now.json and top level files

Apparently nested file system api does not work in production due to Zeit Now

## Config

```
{
    monolithApi: 'api.dev.kauri.io',
    monolithExternalApi: 'api.dev.kauri.io',
    gateway: 'api.dev.kauri.io',
    gethBlockchain: '35.231.60.112:8545',
    KauriCommunityId: '5d2c6edefe402500014349f5',
    uppyConfig,
    analyticsTokens: {
        mixpanel: '627c5ccb5bf7da1d079aef2efaa807c2',
        ga: 'UA-112179323-4',
    },
    testingAccounts: [],
    environment: 'development',
    appId: 'kauri',
    clientId: 'kauri-gateway',
}
```

## Cookies

> TOKEN - JWT

> USER_ID - Web3 userId

# Resources notes:

## Article

Currently uses Showdown for MD parsing, could convert to remark

Could use prism for code highlighting

## Collection + Community

Uses Formik for sections as arrays + React DnD for card DOM interactions

## MD Editor

Currently uses forked react-markdown editor with plugins + buttons

Could be replaced with slate or quill

## Forms

Currently uses AntD built in one, to be removed

Davide probs wants to remove Formik at some point :))

Currently the withFormik({}) HoC is used in index.ts files and generated interface form state is from backend mutations per resource

## Plugins

Uppy, Editor ones

# Links:

> https://jaredpalmer.com/formik/docs/overview

## material-ui

> https://material-ui.com

## draft.js

> https://https://draftjs.org

