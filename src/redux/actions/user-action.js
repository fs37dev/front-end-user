import axios from "axios";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        "https://back-end-production-a31e.up.railway.app/auth/login",
        { email, password }
      );

      const userData = response.data; 
      dispatch(loginSuccess(userData));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, loginUser };
