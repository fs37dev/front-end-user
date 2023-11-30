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
      const response = await axios.post("https://back-end-production-a31e.up.railway.app/api/auth/login", { email, password });

      const userData = response.data;

      localStorage.setItem("token", response.data.data.access_token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${userData.access_token}`;

      dispatch(loginSuccess(userData));
    } catch (error) {
      dispatch(loginFailure(error.response.data));
    }
  };
};

export { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, loginUser };

const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

const registerUser = (name, email, password) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      const response = await axios.post("https://back-end-production-a31e.up.railway.app/api/auth/register", { name, email, password });

      const userData = response.data;

      dispatch(registerSuccess(userData));
    } catch (error) {
      dispatch(registerFailure(error.response.data));
    }
  };
};

export { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, registerUser };
