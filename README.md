# gpm-plugin-npmi 

[![Greenkeeper badge](https://badges.greenkeeper.io/gpmer/gpm-plugin-npmi.svg)](https://greenkeeper.io/)

[gpm](https://github.com/gpmer/gpm.js) plugin for run ``npm install`` after add repository

if the project contain ``package.json`` and ``yarn.lock`` and command ``yarn`` is valid.

will run ``yarn`` instead of ``npm install``

## Installation
```bash
npm install gpm-plugin-npmi -g
```

## Usage

```bash
gpm add https://github.com/gpmer/gpm.js.git -p npmi

# or

gpm add https://github.com/gpmer/gpm.js.git --plugin npmi
```

## Contribute

```bash
git clone https://github.com/gpmer/gpm-plugin-npmi.git
cd ./gpm-plugin-npmi
node ./index.js
```

You can flow [Contribute Guide](https://github.com/gpmer/gpm-plugin-npmi/blob/master/contributing.md)

## License

The [MIT License](https://github.com/gpmer/gpm-plugin-npmi/blob/master/LICENSE)
