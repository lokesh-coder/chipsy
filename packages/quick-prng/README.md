# quick-prng

Lightweight pseudo-random number generator.

## Install

```sh
npm install quick-prng
yarn add quick-prng // returns a float between 0 and 1
```

## Usage

```js
import prng from 'quick-prng';
const random = prng('seed');
```

## Credits

- [park-miller](https://github.com/sindresorhus/park-miller)
- [fnv1a](https://github.com/sindresorhus/fnv1a)