import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import artikelReducer from "./reducers/artikel-reducer";
import reservasiReducer from "./reducers/reservasi-reducer";
import userReducer from "./reducers/user-reducer";
import doctorsReducer from "./reducers/doctor-reducer";

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  user: userReducer,
  artikels: artikelReducer,
  reservasi: reservasiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
