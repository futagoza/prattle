[![release](https://img.shields.io/npm/v/@futagoza/pow.svg)](https://www.npmjs.com/package/@futagoza/pow)
[![dependencies](https://img.shields.io/david/futagoza/pow.svg)](https://david-dm.org/futagoza/pow)
[![Actions](https://github.com/futagoza/pow/workflows/actions/badge.svg)](https://github.com/futagoza/pow/actions?workflow=actions)
[![Codecov](https://codecov.io/gh/futagoza/pow/branch/master/graph/badge.svg)](https://codecov.io/gh/futagoza/pow)
[![CodeFactor](https://www.codefactor.io/repository/github/futagoza/pow/badge)](https://www.codefactor.io/repository/github/futagoza/pow)
[![license](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

POW is a simple test runner for JavaScript (works in [the browser and on Node 8+](./docs/guides/compatibility.md)). It can be used to run spec, benchmark and impact tests, while also letting you customize the runner (reporters, ui, etc).

> POW is still very much work in progress. There are no compatibility guarantees until it goes gold

## install

```sh
npm install --save-dev @futagoza/pow
```

## features

* Run spec, benchmark and impact tests
* Extendable (custom reporters and ui, plugins, etc)
* Basic assertion library included, but compatible with most external assertion libraries
* Snapshots support (_NOTE:_ readable on the browser only via Webpack plugin)
* Aims to be a zero-config experience, but is fully configurable

## documentation

- [Getting Started](https://pow.now.sh/guides/getting-started)
- [Compatibility](https://pow.now.sh/guides/compatibility)
- [API](https://pow.now.sh/api/)

## license

Released under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019+ [Futago-za Ryuu](https://github.com/futagoza)
