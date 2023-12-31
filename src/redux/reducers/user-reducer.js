const initialState = {
  loading: false,
  isAuthenticatedLogin: false,
  isAuthenticatedRegister: false,
  user: "",
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: "",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: true,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: "",
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: true,
        user: "",
        errorMessage: "",
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: action.payload,
      };

    case "GET_USER_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: "",
      };

    case "GET_USER_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: true,
        isAuthenticatedRegister: false,
        user: action.payload,
        errorMessage: "",
      };

    case "GET_USER_DETAIL_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: "",
      };
    case "CLEAR_STATE":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        user: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default userReducer;
