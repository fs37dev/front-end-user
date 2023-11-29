import axios from "axios";

export const fetchDoctors = () => {
  return async function (dispatch) {
    dispatch(fetchDoctorsRequest());

    const response = await axios.get(
      "https://back-end-production-a31e.up.railway.app/api/doctors"
    );

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
