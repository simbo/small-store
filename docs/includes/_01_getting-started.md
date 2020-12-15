# Getting Started

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
  initialCounterState, counterActions
);

// subscribing to the store's state
counterStore.state$.subscribe(state => console.log(state));

// dispatching actions
counterStore.dispatch(CounterAction.Increment);
counterStore.dispatch(CounterAction.Increment);
counterStore.dispatch(CounterAction.Decrement);
```

```javascript
import { Store } from 'small-store';

// action functions
const counterActions = {
  increment: () => state => {
    state.count++;
    return state;
  },
  decrement: () => state => {
    state.count--;
    return state;
  }
};

// the initial state
const initialCounterState = {
  count: 0
};

// creating the store
const counterStore = new Store(initialCounterState, counterActions);

// subscribing to the store's state
counterStore.state$.subscribe(state => console.log(state));

// dispatching actions
counterStore.dispatch('increment');
counterStore.dispatch('increment');
counterStore.dispatch('decrement');
```

> Outputs to console:

```txt
{ count: 0 }
{ count: 1 }
{ count: 2 }
{ count: 1 }
```

<p class="subtitle">Counter Store Example</p>

The example code shows a simple counter store with actions to _increment_ and
_decrement_ the count state.

Using typescript, you have to create an `interface` for your state and an `enum`
for your actions to ensure type safety.

States can only be updated by _dispatching actions_.

An _action_ is simply a function, receiving an optional _payload_ (see
[payloads section](#payloads)) as param.

An action function can have two kinds of returns:

- Another callback function, receiving the current _state_ as param and
  returning the complete new state.

- An object which is either a partial of the new state, which will be merged
  with the previous state, or a complete new state (see
  [effects section](#effects)).

In this example, we are returning callback functions as we need to know about
the current state to return the new state.

<aside class="notice">
An action callback function can change the state in place without thinking about
immutability. Under the hood of the store, <em>immer</em> takes care of these
things.
</aside>

Actions are dispatched by calling `Store.dispatch()` with the action's _name_ as
param.

The latest store state can be retrieved by subscribing to the observable
`Store.state$`.

Head over to the [rxjs docs](https://rxjs-dev.firebaseapp.com/guide/overview)
if you are not familiar with observables and subscriptions.
