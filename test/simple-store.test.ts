/**
 * Tests for a simple state with any values.
 */

import { Actions, Store } from '../src/small-store';

interface SimpleState {
  [key: string]: any;
}

enum SimpleAction {
  Update = 'update',
  Noop = 'noop'
}

interface SimplePayloads {
  [SimpleAction.Update]: { [key: string]: any };
}

function createSimpleStore(): Store<SimpleState, SimpleAction, SimplePayloads> {
  const initialState: SimpleState = {};

  const simpleActions: Actions<SimpleState, SimpleAction, SimplePayloads> = {
    [SimpleAction.Update]: payload => payload
  };

  return new Store<SimpleState, SimpleAction, SimplePayloads>(initialState, simpleActions);
}

test('[simple store] instantiation', () => {
  const store = createSimpleStore();
  expect(store).toBeTruthy();
});

test('[simple store] state', done => {
  const store = createSimpleStore();
  const results = [{}, { foo: 'bar' }, { foo: 'bar', one: true }];
  let i = 0;
  store.state$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) {
      done();
    } else {
      i++;
    }
  });
  store.dispatch(SimpleAction.Update, { foo: 'bar' });
  store.dispatch(SimpleAction.Noop);
  store.dispatch(SimpleAction.Update, { one: true });
});

test('[simple store] actions', done => {
  const store = createSimpleStore();
  const results = [
    {
      name: SimpleAction.Update,
      payload: { foo: 'bar' },
      previousState: {},
      state: { foo: 'bar' }
    },
    {
      name: SimpleAction.Noop,
      payload: undefined,
      previousState: { foo: 'bar' },
      state: { foo: 'bar' }
    },
    {
      name: SimpleAction.Update,
      payload: { one: true },
      previousState: { foo: 'bar' },
      state: { foo: 'bar', one: true }
    }
  ];
  let i = 0;
  store.actions$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) {
      done();
    } else {
      i++;
    }
  });
  store.dispatch(SimpleAction.Update, { foo: 'bar' });
  store.dispatch(SimpleAction.Noop);
  store.dispatch(SimpleAction.Update, { one: true });
});
