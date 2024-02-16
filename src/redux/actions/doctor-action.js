import axios from "axios";

export const GET_DOCTOR_LIST_REQUEST = "GET_DOCTOR_LIST_REQUEST";
export const GET_DOCTOR_LIST_SUCCESS = "GET_DOCTOR_LIST_SUCCESS";
export const GET_DOCTOR_DETAIL_REQUEST = "GET_DOCTOR_DETAIL_REQUEST";
export const GET_DOCTOR_DETAIL_SUCCESS = "GET_DOCTOR_DETAIL_SUCCESS";

export const getDoctorList = () => {
  return async (dispatch) => {
    dispatch(getDoctorListRequest());

    // const response = await axios.get("https://localhost:3000/api/doctors");
    const response = await axios.get("https://localhost:3000");
    console.log(response.data)
    
    // dispatch(getDoctorListSuccess(response.data.doctors));
  };
};

const getDoctorListRequest = () => {
  return {
    type: GET_DOCTOR_LIST_REQUEST,
  };
};

const getDoctorListSuccess = (data) => {
  return {
    type: GET_DOCTOR_LIST_SUCCESS,
    payload: data,
  };
};

export const getDoctorDetail = (id) => {
  return async (dispatch) => {
    dispatch(getDoctorDetailRequest());

    const response = await axios.get(
      `https://localhost:3000/api/doctors/${id}`
    );



    dispatch(getDoctorDetailSuccess(response.data.doctor));
  };
};

const getDoctorDetailRequest = () => {
  return {
    type: "GET_DOCTOR_DETAIL_REQUEST",
  };
};

const getDoctorDetailSuccess = (doctor) => {
  return {
    type: "GET_DOCTOR_DETAIL_SUCCESS",
    payload: doctor,
  };
};


