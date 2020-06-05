console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

// references to things we want to export (not an object)
// export { square, add, subtract as default };

// exports
// -> every file can have a SINGLE default export
// -> and we can have as many NAMED exports as we like
