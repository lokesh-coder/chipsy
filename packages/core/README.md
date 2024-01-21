# Chipsy

Chipsy is a simple, lightweight, and easy to use framework agnostic library that allows you to create beautiful multi-purpose pseudo random colors that can be used for chips, tags and more..

![MIT License](https://img.shields.io/github/license/lokesh-coder/chipsy)
![Build Status](https://img.shields.io/github/actions/workflow/status/lokesh-coder/chipsy/deploy.yaml)
![NPM Downloads](https://img.shields.io/npm/dm/chipsy)
![NPM Version](https://img.shields.io/npm/v/chipsy)
![NPM Bundle Size](https://img.shields.io/bundlephobia/minzip/chipsy)


## Installation

```bash
npm install chipsy
yarn add chipsy
bun install chipsy
pnpm install chipsy
```

## Usage

```javascript
import { getColors } from 'chipsy';
const colors = getColors('tag-name','light',{level:0.5});
// return object { primary:"hsl(...)", secondary:"hsl(...)", tertiary:"hsl(...)" }
```

## Screenshots

![Screenshot](https://raw.githubusercontent.com/lokesh-coder/chipsy/main/assets/images/screenshot.png)


## API Reference

#### Get color

```js
  getColors(name, theme, options)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Label name |
| `theme` | `string` | 'light' or 'dark' |
| `options` | `object` |  |
| `options.level` | `number` | 0.0 to 1.0 |


## Features

- [x] Generate pseudo random colors based on a name ( same name will always return same color )
- [x] Configurable lightness level
- [x] Supports dark and light themes (same color but different lightness level)
- [x] Framework agnostic 
- [x] Lightweight and easy to use

## More
<!-- - [Homepage](lokesh-coder.github.io/chipsy/)
- [API Documentation](lokesh-coder.github.io/chipsy/docs) -->
- [Demo and playground](https://lokesh-coder.github.io/chipsy/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Feedback / Suggestions / Contributions

Any feedback is greatly appreciated. If you have any suggestions or would like to contribute, please feel free to contact me.