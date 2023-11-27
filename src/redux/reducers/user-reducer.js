const initialState = {
  loading: false,
  user: {},
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default authReducer;
