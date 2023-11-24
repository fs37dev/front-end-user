import axios from "axios";

export const fetchDoctors = () => {
  return (dispatch) => {
    dispatch(fetchDoctorsRequest());
    axios
      .get("https://6526133c67cfb1e59ce7dd93.mockapi.io/doctor/")
      .then((response) => {
        const doctors = response.data;
        dispatch(fetchDoctorsSuccess(doctors));
      })
      .catch((error) => {
        dispatch(fetchDoctorsFailure(error.message));
      });
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

export const fetchDoctorsFailure = (error) => {
  return {
    type: "FETCH_DOCTORS_FAILURE",
    payload: error,
  };
};
