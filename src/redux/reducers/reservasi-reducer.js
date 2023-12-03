import {
  SUBMIT_RESERVATION_REQUEST,
  SUBMIT_RESERVATION_SUCCESS,
  SUBMIT_RESERVATION_FAILURE,
  GET_RESERVATION_LIST_REQUEST,
  GET_RESERVATION_LIST_SUCCESS,
  GET_RESERVATION_LIST_FAILURE,
  CLEAR_STATE,
  GET_RESERVATION_DETAIL_REQUEST,
  GET_RESERVATION_DETAIL_SUCCESS,
  GET_RESERVATION_DETAIL_FAILURE,
} from "../actions/reservasi-action";

const initialState = {
  loading: false,
  isAuthenticatedReservation: false,
  reservationId: "",
  data: "",
  errorMessage: "",
};

const reservasiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESERVATION_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: "",
      };
    case SUBMIT_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: true,
        reservationId: action.payload,
        data: "",
        errorMessage: "",
      };

    case SUBMIT_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: action.payload,
      };
    case GET_RESERVATION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: "",
      };
    case GET_RESERVATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: action.payload,
        errorMessage: "",
      };
    case GET_RESERVATION_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: action.payload,
      };
    case GET_RESERVATION_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: "",
      };
    case GET_RESERVATION_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: action.payload,
        errorMessage: "",
      };
    case GET_RESERVATION_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: action.payload,
      };
    case CLEAR_STATE:
      return {
        loading: false,
        isAuthenticatedReservation: false,
        reservationId: "",
        data: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default reservasiReducer;
