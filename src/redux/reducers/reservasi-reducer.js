import {
  SUBMIT_RESERVATION_REQUEST,
  SUBMIT_RESERVATION_SUCCESS,
  SUBMIT_RESERVATION_FAILURE,
  GET_RESERVATION_LIST_REQUEST,
  GET_RESERVATION_LIST_SUCCESS,
  GET_RESERVATION_LIST_FAILURE,
} from "../actions/reservasi-action";

const initialState = {
  loading: false,
  reservationId: null,
  reservations: "",
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
      window.location.href = `/reservations/${action.payload.reservationId}/select-payment`;

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
    case GET_RESERVATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RESERVATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload.reservations,
        error: null,
      };
    case GET_RESERVATION_LIST_FAILURE:
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
