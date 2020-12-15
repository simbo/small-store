# Payloads

```typescript
import { Actions, Store } from 'small-store';

// state declaration
interface TodoState {
  todos: string[];
}

// actions
enum TodoAction {
  Add = 'add',
  Remove = 'remove'
}

// action payloads declaration
interface TodoActionPayloads {
  [TodoAction.Add]: { todo: string };
  [TodoAction.Remove]: { todo: string };
}

// action functions using payload
const todoActions: Actions<TodoState, TodoAction, TodoActionPayloads> = {
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

// the initial state
const initialTodoState: TodoState = {
  todos: []
};

// creating the store
const todoStore = new Store<TodoState, TodoAction, TodoActionPayloads>(
  initialTodoState, todoActions
);

// subscribing to the store's state
todoStore.state$.subscribe(state => console.log(state));

// dispatching actions
todoStore.dispatch(TodoAction.Add, { todo: 'eat' });
todoStore.dispatch(TodoAction.Add, { todo: 'sleep' });
todoStore.dispatch(TodoAction.Remove, { todo: 'eat' });
```

```javascript
import { Store } from 'small-store';

// actions functions using payload
const todoActions = {
  add: payload => state => {
    state.todos.push(payload.todo);
    return state;
  },
  remove: payload => state => {
    const remKey = state.todos.findIndex(todo => todo === payload.todo);
    if (remKey >= 0) state.todos.splice(remKey, 1);
    return state;
  }
};

// the initial state
const initialTodoState = {
  todos: []
};

// creating the store
const todoStore = new Store(initialTodoState, todoActions);

// subscribing to the store's state
todoStore.state$.subscribe(state => console.log(state));

// dispatching actions
todoStore.dispatch('add', { todo: 'eat' });
todoStore.dispatch('add', { todo: 'sleep' });
todoStore.dispatch('remove', { todo: 'eat' });
```

> Outputs in console:

```text
{ todos: [] }
{ todos: ['eat'] }
{ todos: ['eat', 'sleep'] }
{ todos: ['sleep'] }
```

<p class="subtitle">Todo Store Example</p>

In this example, we create a todo store, keeping track of a collection of todos.

To _add_ or _remove_ a todo from the collection, our action functions are using
the _payload_ param.

Again, using typescript, you have to create an `interface` to declare your
action payloads for type safety.

When dispatching the action via `Store.dispatch()`, we are using the action's
_name_ as first param and the action's _payload_ as second param.
