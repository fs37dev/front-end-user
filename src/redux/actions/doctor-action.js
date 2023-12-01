import axios from "axios";

export const fetchDoctorsRequest = () => {
  return {
    type: "FETCH_DOCTORS_REQUEST",
  };
};

export const fetchDoctors = () => {
  return async function (dispatch) {
    dispatch(fetchDoctorsRequest());

    const response = await axios.get("https://back-end-production-a31e.up.railway.app/api/doctors");

    const doctors = response.data;

    dispatch(fetchDoctorsSuccess(doctors));
  };
};

export const fetchDoctorsSuccess = (doctors) => {
  return {
    type: "FETCH_DOCTORS_SUCCESS",
    payload: doctors,
  };
};

export const fetchDoctorDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchDoctorsRequest());

    const response = await axios.get(`https://back-end-production-a31e.up.railway.app/api/doctors/${id}`);

    dispatch(fetchDoctorSuccess(response.data));
  };
};

export const fetchDoctorSuccess = (doctor) => {
  return {
    type: "FETCH_DOCTOR_SUCCESS",
    payload: doctor,
  };
};

export const clearStateDoctor = () => {
  return {
    type: "CLEAR_STATE_DOCTOR",
  };
};
