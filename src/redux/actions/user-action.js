import axios from "axios";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_USER_DETAIL_REQUEST = "GET_USER_DETAIL_REQUEST";
export const GET_USER_DETAIL_SUCCESS = "GET_USER_DETAIL_SUCCESS";
export const GET_USER_DETAIL_FAILURE = "GET_USER_DETAIL_FAILURE";
export const LOGOUT = "LOGOUT";
export const CLEAR_STATE = "CLEAR_STATE";

export const registerUser = (name, email, password) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      await axios.post("https://localhost:3000/api/auth/register", { name, email, password });

      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerFailure(error.response.data.message));
    }
  };
};

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        "https://localhost:3000/api/auth/login",
        { email, password }
      );
      const token = response.data.data.access_token;

      localStorage.setItem("token", token);
      dispatch(loginSuccess());
      dispatch(getUserDetail());
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
    }
  };
};

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const getUserDetail = () => {
  return async (dispatch) => {
    dispatch(getUserDetailRequest());

    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("https://localhost:3000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.user;
      localStorage.setItem("name", data.name);

      dispatch(getUserDetailSuccess(data));
    } catch (error) {
      dispatch(getUserDetailFailure());
    }
  };
};

const getUserDetailRequest = () => ({
  type: GET_USER_DETAIL_REQUEST,
});

const getUserDetailSuccess = (data) => ({
  type: GET_USER_DETAIL_SUCCESS,
  payload: data,
});

const getUserDetailFailure = (error) => ({
  type: GET_USER_DETAIL_FAILURE,
  payload: error,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const logoutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    dispatch(clearState());
  };
};
