import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './reducers/doctor-reducer'; 
import authReducer from './reducers/user-reducer';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
