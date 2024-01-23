# quick-prng

Lightweight pseudo-random number generator.

## Install

```sh
npm install quick-prng
yarn add quick-prng
```

## Usage

```js
import prng from 'quick-prng';
const random = prng('seed'); // returns float value beetween 0 to 1
```

## Credits

- [park-miller](https://github.com/sindresorhus/park-miller)
- [fnv1a](https://github.com/sindresorhus/fnv1a)