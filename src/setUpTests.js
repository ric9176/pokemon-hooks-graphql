// This is the workaround for a logging error that will be solved in react-dom@16.9.0 (currently in alpha) see:
// https://github.com/testing-library/react-testing-library/issues/281
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
