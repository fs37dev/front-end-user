import {
  SUBMIT_RESERVATION_REQUEST,
  SUBMIT_RESERVATION_SUCCESS,
  SUBMIT_RESERVATION_FAILURE,
} from "../actions/reservasi-action";

const initialState = {
  loading: false,
  reservation: null,
  error: null,
};

const reservasiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload,
        error: null,
      };
    case SUBMIT_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        reservation: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservasiReducer;
