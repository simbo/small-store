/**
 * Tests for a content state, which is asynchronously saved via effects.
 */

import { Actions, Effects, Store } from '../src/small-store';

interface SavedContentState {
  content: string;
  saved: boolean;
}

enum SavedContentAction {
  Set = 'set',
  StartSave = 'startSave',
  FinishSave = 'finishSave'
}

interface SavedContentActionPayload {
  [SavedContentAction.Set]: { content: string };
  [SavedContentAction.StartSave]: { content: string };
  [SavedContentAction.FinishSave]: { content: string };
}

function createSavedContentStore(): Store<SavedContentState, SavedContentAction, SavedContentActionPayload> {
  const initialState: SavedContentState = {
    content: '',
    saved: true
  };

  const contentActions: Actions<SavedContentState, SavedContentAction, SavedContentActionPayload> = {
    [SavedContentAction.Set]: payload => state => {
      state.content = payload.content;
      state.saved = false;
      return state;
    },
    [SavedContentAction.StartSave]: () => state => {
      return state;
    },
    [SavedContentAction.FinishSave]: payload => state => {
      state.saved = state.content === payload.content;
      return state;
    }
  };

  const saveContent = async (content: string) => new Promise(resolve => setTimeout(resolve, 100));

  const contentEffects: Effects<SavedContentState, SavedContentAction, SavedContentActionPayload> = {
    [SavedContentAction.Set]: (action, { content }, dispatch) => dispatch(SavedContentAction.StartSave, { content }),
    [SavedContentAction.StartSave]: (action, { content }, dispatch) => {
      saveContent(content).then(() => dispatch(SavedContentAction.FinishSave, { content }));
    }
  };

  return new Store<SavedContentState, SavedContentAction, SavedContentActionPayload>(
    initialState,
    contentActions,
    contentEffects
  );
}

test('[content store] instantiation', () => {
  const store = createSavedContentStore();
  expect(store).toBeTruthy();
});

test('[content store] state', done => {
  const store = createSavedContentStore();
  const results = [
    { content: '', saved: true },
    { content: 'foo', saved: false },
    { content: 'bar', saved: false },
    { content: 'bar', saved: true }
  ];
  let i = 0;
  store.state$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(SavedContentAction.Set, { content: 'foo' });
  store.dispatch(SavedContentAction.Set, { content: 'bar' });
});

test('[content store] actions', done => {
  const store = createSavedContentStore();
  const results = [
    {
      name: SavedContentAction.Set,
      payload: { content: 'foo' },
      previousState: { content: '', saved: true },
      state: { content: 'foo', saved: false }
    },
    {
      name: SavedContentAction.StartSave,
      payload: { content: 'foo' },
      previousState: { content: 'foo', saved: false },
      state: { content: 'foo', saved: false }
    },
    {
      name: SavedContentAction.Set,
      payload: { content: 'bar' },
      previousState: { content: 'foo', saved: false },
      state: { content: 'bar', saved: false }
    },
    {
      name: SavedContentAction.StartSave,
      payload: { content: 'bar' },
      previousState: { content: 'bar', saved: false },
      state: { content: 'bar', saved: false }
    },
    {
      name: SavedContentAction.FinishSave,
      payload: { content: 'foo' },
      previousState: { content: 'bar', saved: false },
      state: { content: 'bar', saved: false }
    },
    {
      name: SavedContentAction.FinishSave,
      payload: { content: 'bar' },
      previousState: { content: 'bar', saved: false },
      state: { content: 'bar', saved: true }
    }
  ];
  let i = 0;
  store.actions$.subscribe(result => {
    expect(result).toEqual(results[i]);
    if (i === results.length - 1) done();
    else i++;
  });
  store.dispatch(SavedContentAction.Set, { content: 'foo' });
  store.dispatch(SavedContentAction.Set, { content: 'bar' });
});
