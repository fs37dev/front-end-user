import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './reducers/doctor-reducer'; 
import authReducer from './reducers/user-reducer';
import artikelReducer from './reducers/artikel-reducer';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  auth: authReducer,
  artikels: artikelReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
