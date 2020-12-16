# with React

```typescript
// creating the store context
export const CounterStoreContext = createContext(initialCounterState);
```

```javascript
// creating the store context
export const CounterStoreContext = createContext(initialCounterState);
```

> App component:

```jsx
import { Component, h } from 'react';
import { CounterStoreContext } from './counter-store';

class App extends Component {
  counterStateSubscription = counterStore.state$
    .subscribe(counterState => this.setState({ counterState }));

  componentWillUnmount() {
    this.counterStateSubscription.unsubscribe();
  }

  render() {
    return (
      <CounterStoreContext.Provider value={this.state.counterState}>
        <SomeThing />
        <OtherThing />
      </CounterStoreContext.Provider>
    );
  }
}
```

> Some component:

```jsx
import { Component, h } from 'react';
import { counterStore } from './counter-store';

export class SomeThing extends Component {
  increment() {
    counterStore.dispatch('increment');
  }
  decrement() {
    counterStore.dispatch('decrement');
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
```

> Other component:

```jsx
import { Component, h, useContext } from 'react';
import { CounterStoreContext } from './counter-store';

class OtherThing extends Component {
  render() {
    const counterState = useContext(CounterStoreContext);
    return <div>{counterState.count}</div>;
  }
}
```

> Alternatively:

```jsx
import { Component, h } from 'react';
import { CounterStoreContext } from './counter-store';

class OtherThing extends Component {
  render() {
    return (
      <CounterStoreContext.Consumer>
        {counterState => counterState.count}
      </CounterStoreContext.Consumer>
    );
  }
}
```

To use small-store with React or Preact, we simply use the frameworks' context
feature.

Let's reuse the counter store, we created in the ["getting started" section](#getting-started).

Additionally to the things we already created, we create a context for the store
state using `createContext`.

We update the context value by simply subscribing to the state in our app
component, as you can see in the example code.

Later within other components you can dispatch actions or use the context to
read and use values from the store state.
