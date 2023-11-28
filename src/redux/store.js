import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './reducers/doctors-reducer'; 

const rootReducer = combineReducers({
  doctors: doctorsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
