import axios from "axios";

export const SUBMIT_RESERVATION_REQUEST = "SUBMIT_RESERVATION_REQUEST";
export const SUBMIT_RESERVATION_SUCCESS = "SUBMIT_RESERVATION_SUCCESS";
export const SUBMIT_RESERVATION_FAILURE = "SUBMIT_RESERVATION_FAILURE";

export const submitReservation = (doctorId, date, time, packageId) => {
  return async (dispatch) => {
    dispatch({ type: SUBMIT_RESERVATION_REQUEST });

    try {
      const response = await axios.post(
        "https://back-end-production-a31e.up.railway.app/api/reservations",
        {
          doctorId,
          date,
          time,
          packageId,
        }
      );

      dispatch({
        type: SUBMIT_RESERVATION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SUBMIT_RESERVATION_FAILURE,
        payload: error.message,
      });
    }
  };
};
