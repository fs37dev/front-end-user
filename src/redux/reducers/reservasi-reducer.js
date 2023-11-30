import { SUBMIT_RESERVATION_REQUEST, SUBMIT_RESERVATION_SUCCESS, SUBMIT_RESERVATION_FAILURE } from "../actions/reservasi-action";

const initialState = {
  loading: false,
  reservationId: null,
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
      window.location.href = `/selectpayment/${action.payload.reservationId}`;

      return {
        ...state,
        loading: false,
        reservationId: action.payload.reservationId,
        error: null,
      };
    case SUBMIT_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        reservationId: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default reservasiReducer;
