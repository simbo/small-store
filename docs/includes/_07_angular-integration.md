# with Angular

```typescript
import { Injectable } from '@angular/core';
import { Store } from 'small-store';

// creating the store as injectable
@Injectable({ providedIn: 'root' })
export class CounterStore extends Store<CounterState, CounterAction> {
  constructor() {
    super(initialCounterState, counterActions);
  }
}
```

```javascript
// you need to use typescript for angular. 😉
```

> Some component:

```typescript
import { Component } from '@angular/core';
import { CounterAction, CounterStore } from './counter-store';

@Component({
  selector: 'some-thing',
  template: `
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class SomeThingComponent {
  constructor(
    public readonly counterStore: CounterStore
  ) {}

  public increment(): void {
    this.counterStore.dispatch(CounterAction.Increment);
  }

  public decrement(): void {
    this.counterStore.dispatch(CounterAction.Decrement);
  }
}
```

```javascript
// you need to use typescript for angular. 😉
```

> Other component:

```typescript
import { Component } from '@angular/core';
import { CounterStore } from './counter-store';

@Component({
  selector: 'other-thing',
  template: `
    <div>{{ (counterStore.state$ | async).count }}</div>
  `
})
export class CounterComponent {
  constructor(
    public readonly counterStore: CounterStore
  ) {}
}
```

```javascript
// you need to use typescript for angular. 😉
```

To use small-store with Angular, we simply create an injectable store.

Let's reuse the counter store, we created in the ["getting started" section](#getting-started).

Instead of instantiating the store directly, we create a `CounterStore` class,
which extends the `Store` class. By adding the `@Injectable` decorator, we can
inject the store into other things.

Within any component or service you can now either dispatch store actions or
subscribe to the state or the actions stream, as you can see it in the example
code.
