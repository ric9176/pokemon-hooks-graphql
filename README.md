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
