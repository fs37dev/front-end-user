import axios from "axios";

export const fetchDoctors = () => {
  return async function (dispatch) {
    dispatch(fetchDoctorsRequest());

    const { data } = await axios.get(
      "https://6526133c67cfb1e59ce7dd93.mockapi.io/doctor"
    );

    dispatch(fetchDoctorsSuccess(data))

    console.log(data)
  }
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

