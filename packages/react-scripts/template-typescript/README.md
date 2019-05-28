# JetBridge Frontend Starter Kit

For best practices, consult [Notion](https://www.notion.so/jetbridge/Starting-A-New-Project-cf03a080207b4569b53bb3b7d06f7f2c).

This project was bootstrapped with [Create React App](https://github.com/jetbridge/create-react-app)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Launches the [storybook](https://github.com/storybooks/storybook) environment.

### `yarn lint`

Runs linter over all files in `./src` folder and its subfolders

### `yarn fix`

Runs linter over all files in `./src` folder and its subfolders and applies the code formatting fixes where possible

### `yarn test`

Runs jest tests in a watch mode

## Code style

### Basic Rules

- Only include one React component per file.
  - However, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file
- Always use TSX syntax.

### Indentation:

Use 2 spaces for indentation

### Naming:

- **Extensions**: Use `.tsx` extension for React components.
- **Filename**: Use PascalCase for filenames. E.g., `AdminDashboard.tsx`.
  **Reference Naming**: Use PascalCase for React components and camelCase for their instances.

```tsx
// bad
import reservationCard from './ReservationCard'

// good
import ReservationCard from './ReservationCard'

// bad
const ReservationItem = <ReservationCard />

// good
const reservationItem = <ReservationCard />
```

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.tsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.tsx` as the filename and use the directory name as the component name:

  ```tsx
  // bad
  import Footer from './Footer/Footer'

  // bad
  import Footer from './Footer/index'

  // good
  import Footer from './Footer'
  ```

- **Types naming**: interface names should start with I:
  `tsx ILoginScreenProps: { }`

- **Higher-order Component Naming**: Use a composite of the higher-order component’s name and the passed-in component’s name as the `displayName` on the generated component. For example, the higher-order component `withFoo()`, when passed a component `Bar` should produce a component with a `displayName` of `withFoo(Bar)`.

### Types:

Always specify prop types and state types for components and functions. Return types for API Requests are required.

### Props

- Always use camelCase for prop names.

  ```tsx
  // bad
  <Foo
    UserName="hello"
    phone_number={12345678}
  />

  // good
  <Foo
    userName="hello"
    phoneNumber={12345678}
  />
  ```

- We don’t recommend using indexes for keys if the order of items may change.

```tsx
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />)
}

// good
{
  todos.map(todo => <Todo {...todo} key={todo.id} />)
}
```

- Do not do props drilling. We recommend using [React Context API](https://reactjs.org/docs/context.html) for passing props down to the children's children components.
