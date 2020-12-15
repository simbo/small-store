# 🗃 Small Store

[![npm Package Version](https://img.shields.io/npm/v/small-store?)](https://www.npmjs.com/package/small-store)
[![Package Dependencies](https://img.shields.io/david/simbo/small-store?label=deps)](https://www.npmjs.com/package/small-store?activeTab=dependencies)
[![Coveralls github](https://img.shields.io/coveralls/github/simbo/small-store)](https://coveralls.io/github/simbo/small-store)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/simbo/small-store/CI/master)](https://github.com/simbo/small-store/actions?query=workflow%3ACI)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/small-store)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)

> A small, immutable, reactive and framework agnostic state store under 2KB
> powered by rxjs and immer with full typescript support. To be used with
> vanilla, react, preact, angular, vue or whatever you like.

---

## Documentation

Visit [simbo.codes/small-store](https://simbo.codes/small-store/) to read the
documentation and the examples.

## Development

Requirements: node.js >=14, yarn >=1.22

```sh
# build using microbundle
yarn build
# watch and rebuild
yarn build:watch
# lint using prettier and eslint
yarn lint
# test using jest
yarn test
# watch and retest
yarn test:watch
# open coverage in default browser
yarn coverage:open
# check everything
yarn preflight
```

### Docs

Requirements: docker

```sh
# pull slate image
docker pull slatedocs/slate
# serve docs on localhost:4567
yarn docs:serve
# build docs to ./docs-build
yarn docs:build
```

## License and Author

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
