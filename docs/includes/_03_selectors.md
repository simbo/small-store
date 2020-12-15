# Selectors

```typescript
import { Selectors } from 'small-store';

// todo state selectors
const todoSelectors: Selectors<TodoState> = {
  allTodos: state => state.todos,
  countTodos: state => state.todos.length,
  firstTodo: state => state.todos[0] || null
}

// subscribing to the store's state
todoStore.state$.subscribe(state => {
  // filter state with selectors and log to console
  console.log(
    'All:', todoSelectors.allTodos(state),
    '\nCount:', todoSelectors.countTodos(state),
    '\nNext:', todoSelectors.firstTodo(state)
  );
});
```

```javascript
// todo state selectors
const todoSelectors = {
  allTodos: state => state.todos,
  countTodos: state => state.todos.length,
  firstTodo: state => state.todos[0] || null
}

// subscribing to the store's state
todoStore.state$.subscribe(state => {
  // filter state with selectors and log to console
  console.log(
    'All:', todoSelectors.allTodos(state),
    '\nCount:', todoSelectors.countTodos(state),
    '\nNext:', todoSelectors.firstTodo(state)
  );
});
```

> Outputs in console:

```text
All: []
Count: 0
Next: null

All: ['eat']
Count: 1
Next: 'eat'

All: ['eat', 'sleep']
Count: 2
Next: 'eat'

All: ['sleep']
Count: 1
Next: 'sleep'
```

<p class="subtitle">Todo Store Example</p>

Now, we are creating some _selectors_ for the todo store we just created in the
[payloads section](#payloads).

A _selector_ is simply a callback, receiving the _state_ as param and returning
whatever you like to select from the state.

In this example, we're creating three selectors:

- `allTodos` will return all todos in our collection
- `countTodos` will return the amount of the todos in our collection
- `nextTodo` will return the first todo from the collection

Again, we are subscribing to `Store.state$`, but this time we filter the output
using our selectors.
