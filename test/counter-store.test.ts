/**
 * Tests for a simple counter state with increment and decrement actions.
 */

import { Actions, Store } from '../src/small-store';

interface CounterState {
  count: number;
}

enum CounterAction {
  Increment = 'increment',
  Decrement = 'decrement'
}

function createCounterStore(): Store<CounterState, CounterAction> {
  const initialState: CounterState = {
    count: 0
  };

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

  return new Store<CounterState, CounterAction>(initialState, counterActions);
}

test('[counter store] instantiation', () => {
  const store = createCounterStore();
  expect(store).toBeTruthy();
});

test('[counter store] state', done => {
  const store = createCounterStore();
  const results = [{ count: 0 }, { count: 1 }, { count: 0 }];
  let i = 0;
  store.state$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(CounterAction.Increment);
  store.dispatch(CounterAction.Decrement);
});

test('[counter store] actions', done => {
  const store = createCounterStore();
  const results = [
    { name: CounterAction.Increment, payload: undefined, previousState: { count: 0 }, state: { count: 1 } },
    { name: CounterAction.Decrement, payload: undefined, previousState: { count: 1 }, state: { count: 0 } }
  ];
  let i = 0;
  store.actions$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(CounterAction.Increment);
  store.dispatch(CounterAction.Decrement);
});
