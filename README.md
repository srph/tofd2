# tofd2 [![npm version](https://img.shields.io/npm/v/@srph/tofd2.svg?style=flat-square)](https://npmjs.com/packages/@srph/tofd2) [![Build Status](https://img.shields.io/travis/srph/tofd2.svg?style=flat-square)](https://travis-ci.org/srph/tofd2?branch=master)

Converts an object to a `FormData` representation. Also supports nested arrays, objects, `File`, and `Buffer`s.

Fork of [tugorez/tofd](https://github.com/tugorez/tofd/pull/1).

## Installation
```bash
npm i @srph/tofd2 --save
```

## Why
This library allows you to declaratively create a `FormData` instead of having to `append` each property.

```diff
- const payload = new FormData()
- payload.append('first_name', firstName)
- payload.append('last_name', lastName)
+ const payload = tofd({
+   first_name: firstName,
+   last_name: lastName
+ })
fetch('/user', { method: 'POST', body: payload })
```

## Usage
```js
const payload = tofd({
  // Basic data types
  first_name: 'hello',
  last_name: 'hello',
  // Nested arrays and objects
  tags: [{ id: 1 } , { id: 2 }],
  // Files and Buffers
  attachments: [File, File],
  avatar: File
})
```

## API
```
tofd(obj: Object): FormData
```
Accepts an object that gets converted into `FormData`.

## Contributing
### Formatting
Run [Prettier](https://github.com/prettier/prettier) on the codebase.
```bash
yarn fmt
```

### Running tests
```bash
yarn test
```
