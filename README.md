# 🗃 Small Store

[![npm Package Version](https://img.shields.io/npm/v/small-store?)](https://www.npmjs.com/package/small-store)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/small-store)
[![Coveralls github](https://img.shields.io/coveralls/github/simbo/small-store)](https://coveralls.io/github/simbo/small-store)
[![Last CI Workflow Status](https://img.shields.io/github/actions/workflow/status/simbo/small-store/ci.yml?branch=master)](https://github.com/simbo/small-store/actions?query=workflow%3ACI)
[![GitHub Repo](https://img.shields.io/badge/repo-public-87ceeb)](https://github.com/simbo/small-store)
[![License MIT](https://img.shields.io/badge/license-MIT-4cc552)](http://simbo.mit-license.org/)

> A small, immutable, reactive and framework agnostic state store under 2KB
> powered by rxjs and immer with native typescript support. To be used with
> vanilla, react, preact, angular, vue or whatever you like.

---

## Quick Start

```typescript
import { Actions, Store } from 'small-store';

// state declaration
interface CounterState {
  count: number;
}

// actions
enum CounterAction {
  Increment = 'increment',
  Decrement = 'decrement'
}

// action functions
const counterActions: Actions<CounterState, CounterAction> = {
  [CounterAction.Increment]: () => state => {
    state.count++;
    return state;
  },
  [CounterAction.Decrement]: () => state => {
    state.count--;
    return state;
  }
};

// the initial state
const initialCounterState: CounterState = {
  count: 0
};

// creating the store
const counterStore = new Store<CounterState, CounterAction>(
  initialCounterState,
  counterActions
);

// subscribing to the store's state
counterStore.state$.subscribe(state => console.log(state));

// dispatching actions
counterStore.dispatch(CounterAction.Increment);
counterStore.dispatch(CounterAction.Increment);
counterStore.dispatch(CounterAction.Decrement);
```

See details and more examples in the [docs](https://simbo.codes/small-store/).

## Documentation

Visit **[simbo.codes/small-store](https://simbo.codes/small-store/)** to read
the documentation and the examples.

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
