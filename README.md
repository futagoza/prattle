[![release](https://img.shields.io/npm/v/prattle.svg)](https://www.npmjs.com/package/prattle)
[![dependencies](https://img.shields.io/david/futagoza/prattle.svg)](https://david-dm.org/futagoza/prattle)
[![ci](https://github.com/futagoza/prattle/workflows/ci/badge.svg)](https://github.com/futagoza/prattle/actions?workflow=ci)
[![Codecov](https://codecov.io/gh/futagoza/prattle/branch/master/graph/badge.svg)](https://codecov.io/gh/futagoza/prattle)
[![license](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

Prattle is a simple test runner for JavaScript (works in [the browser and on Node 10+](./docs/guides/compatibility.md)). It can be used to run spec, benchmark and impact tests, while also letting you customize the runner (reporters, ui, etc).

> Prattle is still very much work in progress. There are no compatibility guarantees until it goes gold

## install

```sh
npm install --save-dev prattle
```

## features

* Run spec, benchmark and impact tests
* Extendable (custom reporters and ui, plugins, etc)
* Basic assertion library included, but compatible with most external assertion libraries
* Snapshots support (_NOTE:_ readable on the browser only via Webpack plugin)
* Aims to be a zero-config experience, but is fully configurable

## documentation

- [Getting Started](https://prattle.now.sh/guides/getting-started)
- [Compatibility](https://prattle.now.sh/guides/compatibility)
- [API](https://prattle.now.sh/api/)

## license

Released under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019+ [Futago-za Ryuu](https://github.com/futagoza)
