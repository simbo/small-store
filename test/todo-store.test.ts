/**
 * Tests for a todo list state using payloads and direct state object change.
 */

import { Actions, Store } from '../src/small-store';

interface TodoState {
  todos: string[];
}

enum TodoAction {
  Add = 'add',
  Remove = 'remove'
}

interface TodoActionPayload {
  [TodoAction.Add]: { todo: string };
  [TodoAction.Remove]: { todo: string };
}

function createTodoStore(): Store<TodoState, TodoAction, TodoActionPayload> {
  const initialState: TodoState = {
    todos: []
  };

  const todoActions: Actions<TodoState, TodoAction, TodoActionPayload> = {
    [TodoAction.Add]: payload => state => {
      state.todos.push(payload.todo);
      return state;
    },
    [TodoAction.Remove]: payload => state => {
      const remKey = state.todos.findIndex(todo => todo === payload.todo);
      if (remKey >= 0) state.todos.splice(remKey, 1);
      return state;
    }
  };

  return new Store<TodoState, TodoAction, TodoActionPayload>(initialState, todoActions);
}

test('[todo store] instantiation', () => {
  const store = createTodoStore();
  expect(store).toBeTruthy();
});

test('[todo store] state', done => {
  const store = createTodoStore();
  const results = [{ todos: [] }, { todos: ['foo'] }, { todos: ['foo', 'bar'] }, { todos: ['bar'] }];
  let i = 0;
  store.state$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(TodoAction.Add, { todo: 'foo' });
  store.dispatch(TodoAction.Add, { todo: 'bar' });
  store.dispatch(TodoAction.Remove, { todo: 'foo' });
});

test('[todo store] actions', done => {
  const store = createTodoStore();
  const results = [
    {
      name: TodoAction.Add,
      payload: { todo: 'foo' },
      previousState: { todos: [] },
      state: { todos: ['foo'] }
    },
    {
      name: TodoAction.Add,
      payload: { todo: 'bar' },
      previousState: { todos: ['foo'] },
      state: { todos: ['foo', 'bar'] }
    },
    {
      name: TodoAction.Remove,
      payload: { todo: 'foo' },
      previousState: { todos: ['foo', 'bar'] },
      state: { todos: ['bar'] }
    }
  ];
  let i = 0;
  store.actions$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(TodoAction.Add, { todo: 'foo' });
  store.dispatch(TodoAction.Add, { todo: 'bar' });
  store.dispatch(TodoAction.Remove, { todo: 'foo' });
});

test('[todo store] immutability', done => {
  const store = createTodoStore();
  const results = [{ todos: [] }, { todos: ['foo'] }, { todos: ['foo', 'bar'] }, { todos: ['bar'] }];
  let prevState: TodoState;
  let i = 0;
  store.state$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === 0) expect(prevState).toBeUndefined();
    else expect(prevState).toEqual(results[i - 1]);
    prevState = result;
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(TodoAction.Add, { todo: 'foo' });
  store.dispatch(TodoAction.Add, { todo: 'bar' });
  store.dispatch(TodoAction.Remove, { todo: 'foo' });
});
