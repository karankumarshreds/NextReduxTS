import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// ======================== post reducer =============================
const postReducer = (initialState: any = {}, action: Action) => {
  console.log('GOT HERE', action.type);
  switch (action.type) {
    case 'GET_TODOS':
      // @ts-ignore
      return action.payload;
    default:
      return initialState;
  }
};
const commentReducer = (initialState: any = {}, action: Action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      // @ts-ignore
      return action.payload;
    default:
      return initialState;
  }
};
// ===================================================================

const reducers = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export type RootState = ReturnType<typeof reducers>;

let store: Store | undefined;

const initializeStore = (initialState: any): Store => {
  // store for the server side (think of it as a mock store)
  let tmpStore: Store =
    store ??
    createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  // store for the client side navigation
  if (initialState && store) {
    tmpStore = createStore(
      reducers,
      { ...store.getState(), ...initialState },
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    store = undefined; // so that the last line of this function overwrites the store
  }

  // in case of the server side rendering return the store that we created
  if (typeof window === 'undefined') {
    return tmpStore;
  }
  // and once we reach the client side, create a fresh store with the values assigned in the above section
  if (!store) {
    store = tmpStore;
  }
  return tmpStore;
};

export const useStore = (initialState: any) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
