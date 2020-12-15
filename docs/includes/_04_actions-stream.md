# Actions Stream

```typescript
// only in development
if (process.env.NODE_ENV !== 'production') {
  // subscribe to the store's action stream
  todoStore.actions$.subscribe(({ name, payload, previousState, state }) =>
    // log details to console
    console.log(
      'Action:', name,
      '\nPayload:', payload,
      '\nPrevious State:', previousState,
      '\nCurrent State:', state
    )
  );
}
```

```javascript
// only in development
if (process.env.NODE_ENV !== 'production') {
  // subscribe to the store's action stream
  todoStore.actions$.subscribe(({ name, payload, previousState, state }) =>
    // log details to console
    console.log(
      'Action:', name,
      '\nPayload:', payload,
      '\nPrevious State:', previousState,
      '\nCurrent State:', state
    )
  );
}
```

> Outputs in console:

```text
Action: 'add'
Payload: { todo: 'foo' }
Previous State: { todos: [] }
Current State: { todos: ['foo'] }

Action: 'add',
Payload: { todo: 'bar' },
Previous State: { todos: ['foo'] }
Current State: { todos: ['foo', 'bar'] }

Action: 'remove'
Payload: { todo: 'foo' }
Previous State: { todos: ['foo', 'bar'] }
Current State: { todos: ['bar'] }
```

<p class="subtitle">Todo Store Example</p>

Now, let's debug the todo store, that we created in the [payloads section](#payloads).

To achieve this, we simply subscribe to `Store.actions$`, the _action stream_ of
our store. This observable returns an object containing the _name_ and the
_payload_ for every triggered action together with the _previous state_ and the
current _state_.

<aside class="notice">
Like subscribing to the store's state, you can also subscribe to the store's
<em>action stream</em> anywhere within your application to react to dispatched
actions or state changes.
</aside>
