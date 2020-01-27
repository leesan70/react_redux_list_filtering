import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'Reducers';

export function configureStore(preloadedState) {
    const store = createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(
          thunkMiddleware
        ),
      ),
    );
  
    return store;
}