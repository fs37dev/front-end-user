import axios from "axios";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    
      const response = await axios.post(
        "https://back-end-production-a31e.up.railway.app/auth/login",
        { email, password }
      );
      dispatch(loginSuccess(response.data));

    }
  };

export const loginRequest = () => {
  return{
    type: "LOGIN_REQUEST",
  };
};

export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: user,
  };
};

