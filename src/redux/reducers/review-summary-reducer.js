import { GET_RESERVATION_DETAIL_FAIL, GET_RESERVATION_DETAIL_REQUEST, GET_RESERVATION_DETAIL_SUCCESS } from "../actions/review-summary";

const initialState = {
  loading: false,
  reservation: null,
  error: null,
};

const reviewSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATION_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RESERVATION_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload.reservation,
        error: null,
      };
    case GET_RESERVATION_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        reservation: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default reviewSummaryReducer;
