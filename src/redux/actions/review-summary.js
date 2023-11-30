import axios from "axios";

export const GET_RESERVATION_DETAIL_REQUEST = "GET_RESERVATION_DETAIL_REQUEST";
export const GET_RESERVATION_DETAIL_SUCCESS = "GET_RESERVATION_DETAIL_SUCCESS";
export const GET_RESERVATION_DETAIL_FAIL = "GET_RESERVATION_DETAIL_FAIL";

export const getReservationDetailRequest = () => {
  return {
    type: "GET_RESERVATION_DETAIL_REQUEST",
  };
};

export const getReservationDetailSuccess = (reservation) => {
  return {
    type: "GET_RESERVATION_DETAIL_SUCCESS",
    payload: reservation,
  };
};

export const getReservationDetail = (id) => {
  return async function (dispatch) {
    try {
      dispatch(getReservationDetailRequest());

      const response = await axios.get(`https://back-end-production-a31e.up.railway.app/api/reservations/${id}`);

      dispatch({
        type: "GET_RESERVATION_DETAIL_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RESERVATION_DETAIL_FAIL",
        payload: error.response.data,
      });
    }
  };
};
