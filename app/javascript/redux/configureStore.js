import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings'

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;