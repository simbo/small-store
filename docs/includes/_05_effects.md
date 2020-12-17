# Effects

```typescript
import { Actions, Effects, Store } from 'small-store';

// state declaration
interface WeatherState {
  location: string | null;
  weather: string | null;
}

// actions
enum WeatherAction {
  SetLocation = 'add',
  RequestWeather = 'requestWeather'
  ReceivedWeather = 'receivedWeather'
}

// action payloads declaration
interface WeatherActionPayloads {
  [WeatherAction.SetLocation]: { location: string };
  [WeatherAction.ReceivedWeather]: { weather: string };
}

// action functions (returning partial states instead of callbacks)
const weatherActions: Actions<WeatherState, WeatherAction, WeatherActionPayloads> = {
  [WeatherAction.SetLocation]: payload => {
    return { location: payload.location };
  },
  [WeatherAction.ReceivedWeather]: payload => {
    return { weather: payload.weather };
  }
};

// effects triggered by a just dispatched action
const weatherEffects: Effects<WeatherState, WeatherAction, WeatherActionPayloads> = {
  [WeatherAction.SetLocation]: (action, state, dispatch) => {
    dispatch(WeatherAction.RequestWeather);
  },
  [WeatherAction.RequestWeather]: (action, state, dispatch) => {
    fetch(`https://someweatherapi.com/location/${state.location}`)
      .then(request => request.json())
      .then(json => dispatch(WeatherAction.ReceivedWeather, { weather: json.weather }));
    );
  }
};

// the initial state
const initialWeatherState: WeatherState = {
  location: null;
  weather: null;
};

// creating the store
const weatherStore = new Store<WeatherState, WeatherAction, WeatherActionPayloads>(
  initialWeatherState, weatherActions, weatherEffects
);

// subscribing to the store's state
weatherStore.state$.subscribe(state => console.log(state));

// dispatching actions
weatherStore.dispatch(WeatherAction.SetLocation, { location: 'Berlin' });
```

```javascript
import { Store } from 'small-store';

// action functions (returning partial states instead of callbacks)
const weatherActions = {
  setLocation: payload => {
    return { location: payload.location };
  },
  receivedWeather: payload => {
    return { weather: payload.weather };
  }
};

// effects triggered by a just dispatched action
const weatherEffects = {
  setLocation: (action, state, dispatch) => {
    dispatch('requestWeather');
  },
  requestWeather: (action, state, dispatch) => {
    fetch(`https://someweatherapi.com/location/${state.location}`)
      .then(request => request.json())
      .then(json => dispatch('receivedWeather', { weather: json.weather }));
    );
  }
};

// the initial state
const initialWeatherState = {
  location: null;
  weather: null;
};

// creating the store
const weatherStore = new Store(initialWeatherState, weatherActions, weatherEffects);

// subscribing to the store's state
weatherStore.state$.subscribe(state => console.log(state));

// dispatching actions
weatherStore.dispatch('setLocation', { location: 'Berlin' });
```

> Outputs in console:

```text
{ location: null, weather: null }
{ location: 'Berlin', weather: null }
{ location: 'Berlin', weather: 'Sunny, 25° Celsius' }
```

<p class="subtitle">Weather Store Example</p>

In this example, we create a weather store, which stores the _location_ and the
corresponding _weather_ for the location. 

Everytime the location changes, the weather should be retrieved automatically
from an external weather service, which is achieved using _effects_.

An _effect_ is a function that is triggered by a specific action. While actions
are synchronous functions, effects can run asynchronous code and optionally
dispatch other actions.

You should use effects when:

- You need to react on an action.
- You need to run asynchronous or expensive code.

The effects object has properties where…

- the key is the name of the action which triggers the effect
- the value is a function, receiving the _action_ name and payload, the current
  _state_ and the _dispatch_ function to trigger new actions.

In this example, we have two effects:

- on the `setLocation` action, the `requestWeather` action is dispatched with
  the new location state as payload.
- on the `requestWeather` action, the external weather service is called and
  when the weather request is done, the `receivedWeather` action is called
  with the received weather status as payload.

Notice, how the `requestWeather` action doesn't need a corresponding function in
`weatherActions` as it doesn't change the state and only triggers an effect.

Also notice, how the action functions are returning partial state objects
instead of callbacks. As we don't need to know about the previous
state for our state changes, we can use this simplification.
