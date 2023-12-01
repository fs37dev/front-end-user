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
  isAuthenticatedReservation: false,
  reservationId: null,
  reservations: "",
  errorMessage: null,
};

const reservasiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticatedReservation: false,
        reservationId: null,
        reservations: "",
        errorMessage: null,
      };
    case SUBMIT_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: true,
        reservationId: action.payload,
        reservations: "",
        errorMessage: null,
      };

    case SUBMIT_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: null,
        reservations: "",
        errorMessage: action.payload,
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
