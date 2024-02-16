import axios from "axios";

export const SUBMIT_RESERVATION_REQUEST = "SUBMIT_RESERVATION_REQUEST";
export const SUBMIT_RESERVATION_SUCCESS = "SUBMIT_RESERVATION_SUCCESS";
export const SUBMIT_RESERVATION_FAILURE = "SUBMIT_RESERVATION_FAILURE";
export const GET_RESERVATION_LIST_REQUEST = "GET_RESERVATION_LIST_REQUEST";
export const GET_RESERVATION_LIST_SUCCESS = "GET_RESERVATION_LIST_SUCCESS";
export const GET_RESERVATION_LIST_FAILURE = "GET_RESERVATION_LIST_FAILURE";
export const GET_RESERVATION_DETAIL_REQUEST = "GET_RESERVATION_DETAIL_REQUEST";
export const GET_RESERVATION_DETAIL_SUCCESS = "GET_RESERVATION_DETAIL_SUCCESS";
export const GET_RESERVATION_DETAIL_FAILURE = "GET_RESERVATION_DETAIL_FAILURE";
export const CLEAR_STATE = "CLEAR_STATE";

export const submitReservation = (doctorId, date, time, packageId, token) => {
  return async (dispatch) => {
    dispatch(submitReservationRequest());

    try {
      const response = await axios.post(
        "https://localhost:3000/api/reservations",
        {
          doctorId,
          date,
          time,
          packageId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(submitReservationSuccess(response.data.reservationId));
    } catch (error) {
      dispatch(submitReservationFailure(error.response.data.message));
    }
  };
};

const submitReservationRequest = () => ({
  type: SUBMIT_RESERVATION_REQUEST,
});
const submitReservationSuccess = (reservationId) => ({
  type: SUBMIT_RESERVATION_SUCCESS,
  payload: reservationId,
});
const submitReservationFailure = (error) => ({
  type: SUBMIT_RESERVATION_FAILURE,
  payload: error,
});

export const getReservationList = () => {
  return async (dispatch) => {
    dispatch(getReservationListRequest());

    try {
      const response = await axios.get(
        "https://localhost:3000/api/reservations"
      );

      dispatch(getReservationListSuccess(response.data.reservations));
    } catch (error) {
      dispatch(getReservationListFailure(error.response.data.message));
    }
  };
};

const getReservationListRequest = () => ({
  type: GET_RESERVATION_LIST_REQUEST,
});
const getReservationListSuccess = (data) => ({
  type: GET_RESERVATION_LIST_SUCCESS,
  payload: data,
});
const getReservationListFailure = (error) => ({
  type: GET_RESERVATION_LIST_FAILURE,
  payload: error,
});

export const getReservationDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getReservationDetailRequest());

      const response = await axios.get(
        `https://localhost:3000/api/reservations/${id}`
      );

      dispatch(getReservationDetailSuccess(response.data.reservation));
    } catch (error) {
      dispatch(getReservationDetailFailure(error.response.data.message));
    }
  };
};

const getReservationDetailRequest = () => {
  return {
    type: "GET_RESERVATION_DETAIL_REQUEST",
  };
};

const getReservationDetailSuccess = (data) => {
  return {
    type: "GET_RESERVATION_DETAIL_SUCCESS",
    payload: data,
  };
};
const getReservationDetailFailure = (error) => {
  return {
    type: "GET_RESERVATION_DETAIL_SUCCESS",
    payload: error,
  };
};

export const clearState = () => ({
  type: CLEAR_STATE,
});
