import axios from "axios";

export const fetchDoctors = () => {
  return async function (dispatch) {
    dispatch(fetchDoctorsRequest());

    const response = await axios.get("https://6526133c67cfb1e59ce7dd93.mockapi.io/doctor");

    const doctors = response.data;

    dispatch(fetchDoctorsSuccess(doctors));
  };
};

export const fetchDoctorsRequest = () => {
  return {
    type: "FETCH_DOCTORS_REQUEST",
  };
};

export const fetchDoctorsSuccess = (doctors) => {
  return {
    type: "FETCH_DOCTORS_SUCCESS",
    payload: doctors,
  };
};
