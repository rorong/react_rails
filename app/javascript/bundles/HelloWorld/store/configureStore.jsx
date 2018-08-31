import {compose, createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import {autoRehydrate} from 'redux-persist'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'


export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk,promiseMiddleware)
  );
}
