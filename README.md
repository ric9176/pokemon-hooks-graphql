# Pokemon app

This app is an application to display a list view and detail view for some Pokemon from a graphql api.

## Install

Clone this repo to your local machine and run

```sh
npm install
```

### There are several scripts in place:

- To run the site in development, use `npm start`
- To run the tests, use `npm test`
- To generate a code coverage report, use `npm run coverage`
- To run a production build for deploy, use `npm run build`

If you use yarn, simply replace `npm` with `yarn`

## Testing

The testing uses Jest (out of the box with create-react-app) along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

The tests focus on [integration tests](https://kentcdodds.com/blog/write-tests) of core functionality which is the data fetching via the react-apollo-hooks.

## Hooks

As the offical Apollo client implementation for hooks is still currently in beta, I've used the react-apollo-hooks community library. This allows us to avoid the drawbacks of render props nesting and the code reduction and simplicity that hooks embrace. It is well supported and is very close to what Apollo have in beta curretnly meaning a switch would mean only minimal refactoring. It also supports use of Suspense although I've not included this as it's not recommended for production apps.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
